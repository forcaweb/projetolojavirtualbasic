import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { imagens } from '../../assets/img/imagens';

export function CardHistoryComponent() {
  return (
    <>
      <div className='tittlePosts'>Histórico de produtos:</div>
      <div className='cardHistoryContainer'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            540: {
              slidesPerView: 3,
            },
            760: {
              slidesPerView: 5,
            },
          }}
          loop
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='cardBox'>
              <div className='imgProd'>
                <img src={imagens.img3} alt='' />
              </div>
              <div className='descProd'>
                <p>Roupas</p>
              </div>
              <div className='priceProd'>
                <span>150,00 R$</span>
                <p>109,00 R$</p>
                <p className='shiping'>Frete Grátis</p>
              </div>
              <div className='linkProd'>
                <a href='/detailsproducts/closet'>Ir ao produto</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='cardBox'>
              <div className='imgProd'>
                <img src={imagens.img4} alt='' />
              </div>
              <div className='descProd'>
                <p>Loja Virtual Força Web</p>
              </div>
              <div className='priceProd'>
                <span>150,00 R$</span>
                <p>109,00 R$</p>
                <p className='shiping'>Frete Grátis</p>
              </div>
              <div className='linkProd'>
                <a href='/detailsproducts/others'>Ir ao produto</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='cardBox'>
              <div className='imgProd'>
                <img src={imagens.img5} alt='' />
              </div>
              <div className='descProd'>
                <p>Loja Virtual Força Web</p>
              </div>
              <div className='priceProd'>
                <span>150,00 R$</span>
                <p>109,00 R$</p>
                <p className='shiping'>Frete Grátis</p>
              </div>
              <div className='linkProd'>
                <a href='/detailsproducts/eletronic'>Ir ao produto</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='cardBox'>
              <div className='imgProd'>
                <img src={imagens.logo} alt='' />
              </div>
              <div className='descProd'>
                <p>Loja Virtual Força Web</p>
              </div>
              <div className='priceProd'>
                <span>150,00 R$</span>
                <p>109,00 R$</p>
                <p className='shiping'>Frete Grátis</p>
              </div>
              <div className='linkProd'>
                <a href='/detailsproducts/others'>Ir ao produto</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
