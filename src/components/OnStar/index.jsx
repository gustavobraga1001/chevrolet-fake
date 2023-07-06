import './OnStar.css'

const Onstar = () => {
    return (
        <div className='onStar'>
            <img src="/images/banner-onstar.webp" alt="Onstar" />
            <div className='onStar_descriscao'>
                <h2>#SempreON: porque a vida é on-line!</h2>
                <ul>
                    <li><span>-</span> Atendimento exclusivo</li>
                    <li><span>-</span> Monitoramento 24/7</li>
                    <li><span>-</span> Integração com o app myChevrolet</li>
                </ul>
                <a href="#">Saiba Mais</a>
            </div>
        </div>
    )
}

export default Onstar