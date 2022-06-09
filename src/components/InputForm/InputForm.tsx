import './InputForm.css'
import { useState, useEffect, useCallback } from "react"
import Button from '../Button/Button'
import Characters from '../Characters/Characters'
import CharacterProps from '../Characters/CharacterProps'

interface InputFormProps {
    defaultValue?: string;
}

const storageFormKey = 'inputValue'

export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('123123')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [characters, setCharacters] = useState<Array<CharacterProps>>()

    const formReadyToSubmit = !displayError && inputValue

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('halo powinny być co najmniej 3 znaki')
            }
            if (messageLength > 20) {
                setErrorMessage('za dużo znaków, musi być max 20')
            }
            setDisplayError(true)
        } else {
            setDisplayError(false)
        }
    }

    const handleEnter = (event: any) => {
        if (event.key === 'Enter') handleSubmit()
    }

    // funkcja zmienia się gdy inputValue się zmienia
    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
            fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
                .then(response => response.json())
                .then(res => res['results'])
                .then(res => setCharacters(res))
        }
    }, [inputValue, formReadyToSubmit])

    // wykonuje się przy pierwszym renderze
    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }
        setInputValue(valueToSet);
    }, [props])

    return <div className='container'>
        <div className="form">
            <p className={displayError ? 'error active' : 'error'}>{errorMessage}</p>
            <video className={displayError ? 'error-img active' : 'error-img'} autoPlay loop muted playsInline>
                <source src='error.webm' type='video/webm' />
                <source src='error.mp4' type='video/mp4' />
            </video>
            <label>Wyszukaj postać z Rick i Morty</label>
            <input className='input' onInput={handleInputChange} value={inputValue} type="text" onKeyUp={handleEnter} />
            <br></br>
            <Button onClick={handleSubmit} disabled={!formReadyToSubmit} content='submit data' />
        </div>
        <Characters characters={characters} />
    </div>
}