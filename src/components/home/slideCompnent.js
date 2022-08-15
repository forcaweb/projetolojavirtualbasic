import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { imagens } from '../../assets/img/imagens';

export function SlideComponent() {
  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      modules={[Pagination, Navigation, Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={imagens.img1} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagens.img2} alt='' />
      </SwiperSlide>
    </Swiper>
  );
}
