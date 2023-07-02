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

const Carrossel = () => {

    const swiper = useSwiper();
    return (
      <>
        <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src='/images/picture 1.webp' /></SwiperSlide>
            <SwiperSlide><img src='/images/picture 2.webp' /></SwiperSlide>
            <SwiperSlide><img src='/images/picture 3.webp' /></SwiperSlide>
        </Swiper>
      </>
    );
  };
  
  export default Carrossel;