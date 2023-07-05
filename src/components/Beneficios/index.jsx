import Ball from '../Ball'
import './Beneficios.css'

const Beneficios = () => {
    return (
        <>
            <div className='Beneficios'>
                <Ball img="/images/carros.svg"  text="Consulte nosso estoque"/>
                <Ball img="/images/money.svg"  text="Ofertas 0 km"/>
                <Ball img="/images/zap.svg"  text="Fale com vendedor"/>
            </div>
        </>
    )
}

export default Beneficios
