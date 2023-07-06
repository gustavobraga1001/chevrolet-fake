import Card from '../Card';
import './Mosaico.css'



const Mosaico = () => {

    const cards = [
        {img: "/images/img1.webp", title:"Elétricos: O futuro chegou!", description:"Conheça a linha de veículos 100% elétricos da Chevrolet e descubra todas as vantagens que essa tecnologia proporciona."}, 

        {img: "/images/img2.webp", title:"Chevrolet Montana", description:"Todo o conforto e estilo do SUV que você precisa, na picape que você sonhava e sempre pronta para qualquer situação."},

        {img: "/images/img3.jpg", title:"Chevrolet Equinox", description:"Aproveite o suv com tudo que você imagina em conectividade, segurança e dirigibilidade."},

        {img: "/images/img4.webp", title:"Chevrolet Sempre", description:"Entrada reduzida, parcelas fixas e recompra garantida: descubra o plano perfeito para você sair sempre de Chevrolet 0km!"},

        {img: "/images/img5.webp", title:"Instituto GM", description:"Saiba como a General Motors promove transformação social por meio de inovação e tecnologia."},
        
        {img: "/images/img6.webp", title:"Segurança é nossa principal preocupação", description:"Os recalls Chevrolet não têm prazo de validade e os consertos são gratuitos em todas as nossas mais de 500 concessionárias."}

    ];

    return (
        <div className='Mosaico'>
            {cards.map(card => <Card img={card.img} title={card.title} description={card.description}/>)}
        </div>
        
    )
}

export default Mosaico