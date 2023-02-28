import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './Banner.module.scss';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Banner() {

    
    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            clickable: true,
            dynamicBullets: true,
        },
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
        navigation: true,
        className: styles.banner_swiper,
        onSlideChange: () => console.log('slide change'),
        onSwiper: (swiper) => console.log(swiper),
    };


    return (
        <Swiper {...swiperParams}>
            <SwiperSlide>
                <div style={{ backgroundImage: `url("/images/banner-1.jpg")` }} className={`${styles.banner}`}>
                    <a href="#" className={`${styles.btn_banner}`}>Travel</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: `url("/images/banner-2.jpg")` }} className={`${styles.banner}`}>
                <a href="#" className={`${styles.btn_banner}`}>Travel</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: `url("/images/banner-3.jpg")` }} className={`${styles.banner}`}>
                <a href="#" className={`${styles.btn_banner}`}>Travel</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: `url("/images/banner-4.jpg")` }} className={`${styles.banner}`}>
                <a href="#" className={`${styles.btn_banner}`}>Travel</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: `url("/images/banner-5.jpg")` }} className={`${styles.banner}`}>
                <a href="#" className={`${styles.btn_banner}`}>Travel</a>
                </div>
            </SwiperSlide>
        </Swiper>
    )

}

