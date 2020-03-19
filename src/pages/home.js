import React from 'react';

import Banner from '../layout/common/banner/banner'
import Welcome from './components/home/first_section'
import TreatmentSection from './components/home/treatments.js'
import OrnaBackground from './components/home/orna_background'

import './components/home/home.css';


function Home(){
    
    return(
        <div className="container">
            <Welcome />
            <OrnaBackground />
            <section className="third-section-container">
                <h1> הטיפולים שלנו</h1>
                <TreatmentSection />
            </section>
            <Banner />
       </div>
    
    )
}


export default Home;