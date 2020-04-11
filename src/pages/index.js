import React from 'react';

import Banner from '../layout/common/banner/banner';
import Welcome from './components/home/welcome/welcome';
import TreatmentSection from './components/home/treatments/treatments.js';
import OurStory from './components/home/ourStory/ourStory';

import '../../static/index.css';

import './components/home/home.css';
import styles from './components/home/home.module.scss';


function Home() {
  return (
    <>
    <Welcome />
    <div className={styles.container}>
      <OurStory />
      <TreatmentSection />
      <section >
        <Banner />
      </section>
    </div>
    </>
  );
}

export default Home;
