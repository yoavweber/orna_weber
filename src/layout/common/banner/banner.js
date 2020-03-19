import React from 'react';

import { Button } from '../common';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="banner_content">
        <div className="banner_text">
          <h1>לקביעת פגישה</h1>
          <h2>שעות פעילות</h2>
          <p>ראשון שלישי רביעי חמישי: 9:00-20:00</p>
          <p>שישי: 9:00-13:00</p>
          <p>שישי: 9:00-13:00</p>
        </div>
        <Button primary>לפגישת ייעוץ</Button>
        <p>טלפון: 0506398006</p>
      </div>
      <div className="banner_bg" />
    </div>
  );
};

export default Banner;
