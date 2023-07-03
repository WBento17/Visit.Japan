import React, { useEffect, useRef } from 'react';
import styles from './Popular.module.scss';

export default function Popular() {

  return (
    <section className={styles.popular_sect}>
      <div className='container'>
        <h1 className={`${styles.title_regions}`}>Popular Regions</h1>
      </div>

      <div className={`${styles.images_sect}`}>
        <div className={`${styles.desktop_wrapper}`}>
          <div className={`${styles.first_column}`}>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-1.jpg")` }} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                  <p className={`${styles.text_place}`}>Magome (Nakasendo)</p>
                </div>
              </a>
            </div>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-2.jpg")`}} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                    <p className={`${styles.text_place}`}>Yakushima National Park</p>
                </div>
              </a>
            </div>
          </div>
          <div className={`${styles.second_column}`}>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-3.jpg")`}} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                  <p className={`${styles.text_place}`}>Togetsukyo Bridge</p>
                </div>
              </a>
            </div>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-4.jpg")`}} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                  <p className={`${styles.text_place}`}>Kagoshuma City</p>
                </div>
              </a>
            </div>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-5.jpg")`}} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                  <p className={`${styles.text_place}`}>Dontonbori</p>
                </div>
              </a>
            </div>
          </div>
          <div className={`${styles.third_column}`}>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-6.jpg")`}} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                  <p className={`${styles.text_place}`}>Nebuta Museum</p>
                </div>
              </a>
            </div>
            <div className={`${styles.image_handler_box}`}>
              <a href='#' style={{ backgroundImage: `url("images/img-sobre-images-7.jpg")`}} className={`${styles.image_holder}`}>
                <div className={`${styles.bar}`}>
                  <p className={`${styles.text_place}`}>Otaru</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.mobile_wrapper}`}>
          <div className={`${styles.image_handler_box} ${styles.aspect_ratio_medium}`}>
            <div style={{ backgroundImage: `url("images/img-sobre-images-1.jpg")`}} className={`${styles.image_holder}`}></div>
          </div>
          <div className={`${styles.image_handler_box} ${styles.aspect_ratio_small}`}>
            <div style={{ backgroundImage: `url("images/img-sobre-images-3.jpg")`}} className={`${styles.image_holder}`}></div>
          </div>
          <div className={`${styles.aspect_ratio_medium} ${styles.dual_box_wrapper}`}>
            <div className={`${styles.image_handler_box}`}>
              <div style={{ backgroundImage: `url("images/img-sobre-images-2.jpg")`}} className={`${styles.image_holder}`}></div>
            </div>
            <div className={`${styles.image_handler_box}`}>
              <div style={{ backgroundImage: `url("images/img-sobre-images-5.jpg")`}} className={`${styles.image_holder}`}></div>
            </div>
          </div>
          <div className={`${styles.image_handler_box} ${styles.aspect_ratio_small}`}>
            <div style={{ backgroundImage: `url("images/img-sobre-images-4.jpg")`}} className={`${styles.image_holder}`}></div>
          </div>
          <div className={`${styles.image_handler_box} ${styles.aspect_ratio_small}`}>
            <div style={{ backgroundImage: `url("images/img-sobre-images-7.jpg")`}} className={`${styles.image_holder}`}></div>
          </div>
          <div className={`${styles.image_handler_box} ${styles.aspect_ratio_medium}`}>
            <div style={{ backgroundImage: `url("images/img-sobre-images-6.jpg")`}} className={`${styles.image_holder}`}></div>
          </div>
        </div>
      </div>

      <div className={`${styles.ver_mais_wrapper} container`}>
        <a href='#' className={`${styles.ver_mais}`}>
          <p href='#' className={`${styles.ver_mais_texto}`}>See more</p>
        </a>
      </div>

    </section>
  );
}

