import CharacterProps from "./CharacterProps"

export const Character = (props?: CharacterProps) => {
  return (
    <div className="character">
      <img src={props?.image} alt={props?.name + ' image'} />
      <div className="info">
        <h3>{props?.name}</h3>
        <p>status: {props?.status}</p>
        <p>species: {props?.species}</p>
        {props?.type !== '' && <p>type: {props?.type}</p>}
        <p>gender: {props?.gender}</p>
      </div>
    </div>
  )
}

export default Character