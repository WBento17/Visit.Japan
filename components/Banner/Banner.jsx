import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './Banner.module.scss';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Banner() {

    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: `.${styles.banner_swiper_dots}`,
            clickable: true,
            dynamicBullets: true,
            bulletClass: styles.banner_swiper_dot,
            bulletActiveClass: styles.banner_swiper_dot_active,
        },
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: `.${styles.banner_swiper_next}`,
            prevEl: `.${styles.banner_swiper_prev}`
        },
        noSwipingSelector: null,
        className: styles.banner_swiper,
        onSlideChange: () => console.log('slide change'),
        onSwiper: (swiper) => console.log(swiper),
    };




    return (
        <Swiper {...swiperParams}>
            <SwiperSlide>
                <div style={{ backgroundImage: `url("/images/banner-1.jpg")` }} className={`${styles.banner}`}>
                    <a href="#" className={`${styles.btn_banner} `}>Travel</a>
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
            <div className={`${styles.banner_swiper_next}`} />
            <div className={`${styles.banner_swiper_prev}`} />
            <div className={`${styles.banner_swiper_dots}`} />
        </Swiper>
    )

}

