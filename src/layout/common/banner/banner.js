import React from 'react';

import { Button } from '../common';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
          <h1>לקביעת פגישה</h1>
          <p>שעות פעילות</p>
          <p>ראשון שלישי רביעי חמישי: 9:00-20:00</p>
          <p>שישי: 9:00-13:00</p>
          <p>שישי: 9:00-13:00</p>
        <div className={styles.cta}>
          <Button primary>לפגישת ייעוץ</Button>
          <a href='#' >טלפון: 0506398006</a>
        </div>
      </div>
      <div className={styles.bgWrapper}>
        <figure className={styles.bg}>
          <span className={styles.bgDecoration}/>
        </figure> 
      </div> 
    </section>
  );
};

export default Banner;
