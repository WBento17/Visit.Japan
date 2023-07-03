import React, { useState } from 'react';
import styles from './Visit.module.scss';

export default function Visit() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section style={{ backgroundImage: `url("images/visit-bg.png")` }} className={styles.visit_sect}>
      <div
        className={`${styles.visit_wrapper} ${isHovered ? styles.video_fullscreen : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <video autoPlay controls className={styles.video}>
            <source src="video/visitjapan.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        ) : (
          <h1 className={styles.visit_text}>
            Visit<span className={styles.red_dot}>.</span>Japan
          </h1>
        )}
      </div>
    </section>
  );
}

