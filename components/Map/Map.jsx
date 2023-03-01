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
    fetch('/images/japan.svg')
      .then(response => response.text())
      .then(data => {
        const svgWithClass = data.replace('<svg', '<svg class="' + styles.japan_svg + '"');
        setSvgText(svgWithClass);
      });
    }, []);

    useEffect(() => {
      fetch('/images/japan.svg')
        .then(response => response.text())
        .then(data => {
          const svgContainer = document.createElement('div');
          svgContainer.innerHTML = data;
    
          const jpElements = svgContainer.querySelectorAll('[id^="JP-"][id$="02"], [id^="JP-"][id$="03"], [id^="JP-"][id$="05"], [id^="JP-"][id$="06"], [id^="JP-"][id$="04"], [id^="JP-"][id$="07"]');
          jpElements.forEach(jpElement => {
            jpElement.style.fill = '#fa9999';
          });
    
          setSvgText(svgContainer.innerHTML);
        });
    }, []);
    

    return (
        <section className={`${styles.map_japan}`}>
            <div className={`${styles.japan_swiper}`}>
              <h1 className={`${styles.title_regions}`}>Regions of Japan</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: svgText }} className={`${styles.japan_svg}`} />
        </section>
        
    )

}