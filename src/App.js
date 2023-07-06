import Swiper from 'swiper';
import './App.css';
import Navbar from './components/Navbar';
import Carrossel from './components/Carrossel';
import Beneficios from './components/Beneficios';
import SaberMais from './components/SaberMais';
import Onstar from './components/OnStar';
import Mosaico from './components/Mosaico';


function App() {

  
  return (
    <>
      <Navbar />
      <Carrossel imagens={[
        {src:'/images/picture1.webp', infos:true, h1: "Bolt EUV", p: "Tecnologia desempenho e sustentabilidade para você ir cada vez mais longe.", button: false}, 
        {src:'/images/picture2.webp', infos:false}, 
        {src:'/images/picture3.webp', infos:true, h1: "Silverado", p: "Pense (muito) grande: Nada domina a força de uma lenda.", button: false} 
        ]} 
      />
      <SaberMais text="Saber mais" src="/images/arrow.svg"/>
      <Beneficios />
      <Carrossel imagens={[
        {src:'/images/banner-desk.webp', infos:false}, 
        {src:'/images/tracker.webp', infos:true, button: true,  h1:"Seu tracker 0 km a um clique de distância.", p:"Assuma a direção do SUV que não para de evoluir e descubra novos caminhos...", b:"Consulte nosso estoque", icon:'/images/estoque.svg'}
        ]}
      />
      <SaberMais />
      <Onstar />
      <Mosaico />
    </>
  );
}

export default App;
