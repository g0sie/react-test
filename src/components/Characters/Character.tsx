import CharacterProps from "./CharacterProps"

export const Character = (props?: CharacterProps) => {
  return (
    <div>
      <img src={props?.image} alt={props?.name + ' image'} />
      <p>name: {props?.name}</p>
      <p>status: {props?.status}</p>
      <p>species: {props?.species}</p>
      {props?.type !== '' && <p>type: {props?.type}</p>}
      <p>gender: {props?.gender}</p>
    </div>
  )
}

export default Character