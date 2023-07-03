import React, { useState } from 'react';
import styles from './Popular.module.scss';

export default function Popular() {

  return (
    <section className={styles.popular_sect}>
      <div className='container'>
        <h1 className={`${styles.title_regions}`}>Popular Regions</h1>
      </div>
      
    </section>
  );
}

