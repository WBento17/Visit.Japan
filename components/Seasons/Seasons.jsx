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
                  spaceBetween={18}
                  slidesPerView={1}
                  loop={true}
                  navigation={true} 
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 26,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 26,
                    },
                  }}
                  modules={[Navigation]} 
                  className={`${styles.swiper_seasons}`}>

                  <SwiperSlide>
                    <div style={{backgroundImage: `url("images/jan.png")`}} className={`${styles.slide}`}>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div style={{backgroundImage: `url("images/feb.png")`}} className={`${styles.slide}`}></div>
                  </SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/mar.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/abr.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/may.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/jun.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/jul.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/ago.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/set.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/out.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/nov.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                  <SwiperSlide><div style={{backgroundImage: `url("images/dec.png")`}} className={`${styles.slide}`}></div></SwiperSlide>
                </Swiper>
            </div>
          </div>

        </section>
        
    )

}