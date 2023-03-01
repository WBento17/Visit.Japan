import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './Map.module.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Map() {

    const [svgText, setSvgText] = useState(null);

    useEffect(() => {
    // fetch the SVG file as text
    fetch('/images/japan.svg')
      .then(response => response.text())
      .then(data => {
        // add class or ID to SVG elements as needed
        const svgWithClass = data.replace('<svg', '<svg class="' + styles.japan_svg + '"');
        // set the SVG text as the state
        setSvgText(svgWithClass);
      });
    }, []);

    return (
        <section className={`${styles.map_japan}`}>
            <div className={`${styles.japan_swiper}`}></div>
            <div dangerouslySetInnerHTML={{ __html: svgText }} className={`${styles.japan_svg}`} />
        </section>
        
    )

}