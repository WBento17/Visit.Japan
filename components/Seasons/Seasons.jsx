import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import styles from './Seasons.module.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Seasons() {
    return (
        <section className={`${styles.seasons_japan}`}>
          <div className='container'>
            <div className={`${styles.seasons_swiper}`}>
              <h1 className={`${styles.title_seasons}`}>Travel Highlights</h1>
                <Swiper 
                  spaceBetween={26}
                  slidesPerView={'auto'}
                  loop={true}
                  navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
                  breakpoints={{
                    768: {
                      spaceBetween: 20,
                    },
                    1440: {
                      spaceBetween: 26,
                    },
                  }}
                  modules={[Navigation]} 
                  className={`${styles.swiper_seasons}`}>

                  <SwiperSlide className={`${styles.swiper_slide}`}>
                    <a href='#' style={{backgroundImage: `url("images/jan.png")`}} className={`${styles.slide}`}>
                      <div className={`${styles.mes_wrapper}`}>
                        <h1 className={`${styles.mes}`}>January</h1>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/feb.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>February</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                    <a href='#' style={{backgroundImage: `url("images/mar.png")`}} className={`${styles.slide}`}>
                      <div className={`${styles.mes_wrapper}`}>
                        <h1 className={`${styles.mes}`}>March</h1>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/abr.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>April</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/may.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>May</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/jun.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>June</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/jul.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>July</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/ago.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>August</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/set.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>September</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/out.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>October</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/nov.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>November</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.swiper_slide}`}>
                  <a href='#' style={{backgroundImage: `url("images/dec.png")`}} className={`${styles.slide}`}>
                    <div className={`${styles.mes_wrapper}`}>
                      <h1 className={`${styles.mes}`}>December</h1>
                    </div>
                  </a>
                  </SwiperSlide>
                  <div className={`${styles.custom_prev} custom-prev`}>
                    <img className={`${styles.seta}`} src='images/seta-carousel.svg'></img>
                  </div>
                  <div className={`${styles.custom_next} custom-next`}>
                    <img className={`${styles.seta}`} src='images/seta-carousel.svg'></img>
                  </div>
                </Swiper>
            </div>
          </div>

        </section>
        
    )

}