import React from 'react';

import Banner from '../layout/common/banner/banner';
import Welcome from './components/home/welcome/welcome';
import TreatmentSection from './components/home/treatments/treatments.js';
import OurStory from './components/home/ourStory/ourStory';

import '../../static/index.css';

import './components/home/home.css';

function Home() {
  return (
    <div className="container">
      <Welcome />
      <OurStory />
      <TreatmentSection />
      <Banner />
    </div>
  );
}

export default Home;
