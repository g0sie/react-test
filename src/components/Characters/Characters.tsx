import Character from './Character'
import CharacterProps from './CharacterProps'

import './Characters.css'

interface CharactersProps {
  characters?: Array<CharacterProps>,
}

export const Characters = (props?: CharactersProps) => {

  return (
    <div className='characters'>
      {props?.characters?.map((character) => {
        return (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            image={character.image} />
        )
      })}
    </div>
  )

}

export default Characters