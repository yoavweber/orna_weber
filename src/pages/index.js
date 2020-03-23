import React from 'react';

import Banner from '../layout/common/banner/banner';
import Welcome from './components/home/welcome/welcome';
import TreatmentSection from './components/home/treatments/treatments.js';
import OurStory from './components/home/ourStory/ourStory';

import './index.css';

import './components/home/home.css';

function Home() {
  return (
    <div className="container">
      <Welcome />
      <OurStory />
      <section className="third-section-container">
        <h1> הטיפולים שלנו</h1>
        <TreatmentSection />
      </section>
      <Banner />
    </div>
  );
}

export default Home;
