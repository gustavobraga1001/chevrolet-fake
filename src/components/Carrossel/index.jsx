// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carrossel.css'
import SaberMais from '../SaberMais';
import { useState } from 'react';

const Carrossel = (props) => {

  const [imgs, setImgs] = useState([])
  const teste = [];

    const swiper = useSwiper();
    return (
      
        <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={19}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
        >
           {props.imagens.map(img => img.infos === true ? 
           <SwiperSlide key={img.src}>
              <div className='picture' style={{ backgroundImage: `url(${img.src})` }}>
                <div className='infos'>
                  <h1>{img.h1}</h1>
                  <p>{img.p}</p>
                  {img.button == true ?  <a className='button'>{img.b} <img src={img.icon}/></a>:''}
                </div>
              </div>
          </SwiperSlide> 
           : 
           <SwiperSlide key={img}><img src={img.src}  /> </SwiperSlide>
           )}

        </Swiper>

    );
  };
  
  export default Carrossel;