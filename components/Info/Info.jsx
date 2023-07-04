import React, { useRef, useState, useEffect } from 'react';
import styles from './Info.module.scss';

export default function Info() {
  const motorMirrorRef = useRef(null);
  const motorContentHandlerRef = useRef(null);
  const combustivelWrapperRef = useRef([]);

  useEffect(() => {
    const combustivelWrapperHeight = combustivelWrapperRef.current[0]?.clientHeight || 0;
    let motorMobileOffsetValue = 0;

    if (window.innerWidth < 992) {
      motorMobileOffsetValue = document.querySelector('.motor_left_content')?.clientHeight || 0;
    } else {
      motorMobileOffsetValue = 0;
    }

    if (window.innerWidth >= 768 && motorMirrorRef.current) {
      motorMirrorRef.current.style.height = `${(combustivelWrapperHeight + motorMobileOffsetValue / 2.2) * combustivelWrapperRef.current.length}px`;
    }

    const motorMirrorHeight = motorMirrorRef.current?.clientHeight || 0;
    const motorMirrorOffsetTop = motorMirrorRef.current?.offsetTop || 0;

    let motorStickyLimit = motorMirrorHeight - window.innerHeight;
    let motorDeslocateSum = 0;

    let combustivelWrapper1TranslateFactor = 0;
    let combustivelWrapper2TranslateFactor = 0;
    let combustivelWrapper3TranslateFactor = 0;

    const handleScroll = () => {
      const valueScrolled = window.pageYOffset;

      if (window.innerWidth >= 768 && motorContentHandlerRef.current) {
        if (valueScrolled > motorMirrorOffsetTop) {
          motorDeslocateSum = valueScrolled - motorMirrorOffsetTop;
          if (motorDeslocateSum > motorStickyLimit) {
            motorDeslocateSum = motorStickyLimit;
          }
        } else {
          motorDeslocateSum = 0;
        }
        motorContentHandlerRef.current.style.transform = `translateY(${motorDeslocateSum}px)`;

        if (valueScrolled > motorMirrorOffsetTop - window.innerHeight) {
          // Primeiro Bloco
          combustivelWrapper1TranslateFactor = ((motorMirrorOffsetTop - valueScrolled) / combustivelWrapperHeight) * 100;

          if (combustivelWrapper1TranslateFactor < 0) {
            combustivelWrapper1TranslateFactor = 0;
          }

          combustivelWrapperRef.current[0]?.style.setProperty('transform', `translateX(${combustivelWrapper1TranslateFactor}%)`);

          // Segundo Bloco
          combustivelWrapper2TranslateFactor = (((motorMirrorOffsetTop + combustivelWrapperHeight) - valueScrolled) / combustivelWrapperHeight) * 100;

          if (combustivelWrapper2TranslateFactor < 0) {
            combustivelWrapper2TranslateFactor = 0;
          }

          combustivelWrapperRef.current[1]?.style.setProperty('transform', `translateX(${combustivelWrapper2TranslateFactor}%)`);

          // Terceiro Bloco
          combustivelWrapper3TranslateFactor = (((motorMirrorOffsetTop + combustivelWrapperHeight * 2) - valueScrolled) / combustivelWrapperHeight) * 100;

          if (combustivelWrapper3TranslateFactor < 0) {
            combustivelWrapper3TranslateFactor = 0;
          }

          combustivelWrapperRef.current[2]?.style.setProperty('transform', `translateX(${combustivelWrapper3TranslateFactor}%)`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const jumpToHash = (hash) => {
    if (!hash) {
      return;
    }

    let isFixed = false;
    let manualValue = 0;
    let id = hash;

    if (hash.indexOf('?') > 0) {
      id = hash.split('?')[0];
    }

    if (window.innerWidth >= 768) {
      switch (id) {
        case '#ipimax':
          isFixed = true;
          manualValue = document.querySelector(id).parentElement.parentElement.offsetTop;
          break;

        case '#originais':
          isFixed = true;
          manualValue = document.querySelector(id).parentElement.parentElement.offsetTop + document.querySelector(id).offsetHeight;
          break;

        case '#ipimaxpro':
          isFixed = true;
          manualValue = document.querySelector(id).parentElement.parentElement.offsetTop + (document.querySelector(id).offsetHeight * 2);
          break;

        default:
          break;
      }
    } else {
      switch (id) {
        case '#ipimax':
          isFixed = true;
          manualValue = document.querySelector(id).closest('.motor_sect').offsetTop;
          break;

        case '#originais':
          isFixed = true;
          manualValue = document.querySelector(id).closest('.motor_sect').offsetTop;
          setTimeout(() => {
            // mobileCombustiveisSwiper.slideNext();
          }, 400);
          break;

        case '#ipimaxpro':
          isFixed = true;
          manualValue = document.querySelector(id).closest('.motor_sect').offsetTop;
          setTimeout(() => {
            // mobileCombustiveisSwiper.slideNext();
            // mobileCombustiveisSwiper.slideNext();
          }, 400);
          break;

        default:
          break;
      }
    }

    if (isFixed) {
      window.scrollTo({ top: manualValue, behavior: manualValue > 5000 ? 'smooth' : 'auto' });
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    jumpToHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      jumpToHash(window.location.hash);
    });

    return () => {
      window.removeEventListener('hashchange', () => {
        jumpToHash(window.location.hash);
      });
    };
  }, []);


  return (
    <section className={`${styles.motor_sect}`}>
      <div className={`${styles.motor_mirror}`} ref={motorMirrorRef}>
        <div className={`${styles.motor_content_handler}`} ref={motorContentHandlerRef}>
          <div className={`${styles.motor_left_content}`}>
            <div className={`${styles.content_wrapper}`}>
              <h2 className={`${styles.title}`}>How Visit Japan</h2>
              <p className={`${styles.texto}`}>Info, Visa, Airport, Hotel, everything you need.</p>
            </div>
          </div>
          <div id="ipimax" className={`${styles.combustivel_wrapper}`} ref={(el) => (combustivelWrapperRef.current[0] = el)}>
              <div style={{backgroundImage: `url("images/passport.png")`}} className={`${styles.img_content}`}></div>
              <div className={`${styles.content}`}>
                <a href='#' className={`${styles.comb_title}`}>Visa information</a>
                <p className={`${styles.comb_text}`}>All you need to know about entering, leaving and staying in Japan</p>
              </div>
          </div>
          <div id="originais" className={`${styles.combustivel_wrapper}`} ref={(el) => (combustivelWrapperRef.current[1] = el)}>
              <div style={{backgroundImage: `url("images/stay.jpg")`}} className={`${styles.img_content}`}></div>
              <div className={`${styles.content}`}>
                <a href='#' className={`${styles.comb_title}`}>Where to Stay</a>
                <p className={`${styles.comb_text}`}>Online-booking sites make staying in Japan easier than ever</p>
              </div>
          </div>
          <div id="ipimaxpro" className={`${styles.combustivel_wrapper}`} ref={(el) => (combustivelWrapperRef.current[2] = el)}>
              <div style={{backgroundImage: `url("images/airport.jpg")`}} className={`${styles.img_content}`}></div>
              <div className={`${styles.content}`}>
                <a href='#' className={`${styles.comb_title}`}>Airport Acess</a>
                <p className={`${styles.comb_text}`}>Given Japan's remote location on the globe, your trip to the country will more than likely require a long-haul flight.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

