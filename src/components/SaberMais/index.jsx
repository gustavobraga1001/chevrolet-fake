import './SaberMais.css'

const SaberMais = (props) => {
    return (
        <div className='saberMais'>
            <p>{props.text}</p>
            {props.src ? <img src={props.src}/> : ""}
        </div>
    )
}

export default SaberMais 