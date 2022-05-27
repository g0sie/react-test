import './InputForm.css'
import { useState, useEffect, useCallback } from "react"
import Button from '../Button/Button'

interface InputFormProps {
    defaultValue?: string;
}

const storageFormKey = 'inputValue'

export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('123123')
    const [errorMessage, setErrorMessage] = useState<string>('')

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

    // funkcja zmienia się gdy inputValue się zmienia
    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
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

    return <div className="form">
        {displayError && <p className="error">{errorMessage}</p>}
        <input className='input' onInput={handleInputChange} value={inputValue} type="text" />
        <br></br>
        <Button onClick={handleSubmit} disabled={!formReadyToSubmit} content='submit data' />
    </div>
}