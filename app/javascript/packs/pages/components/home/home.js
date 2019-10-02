import React from 'react';

import Banner from '../../../layout/components/common/banner/banner'
import Footer from '../../../layout/components/common/footer/footer'


import Welcome from './first_section'
import TreatmentSection from './treatments.js'
import OrnaBackground from './orna_background'

import './home.css';


console.log('from home!')

function Home(){
    
    return(
        <div className="container">
            <Welcome />
            <OrnaBackground />
            <section className="third-section-container">
                <h1> הטיפולים שלנו</h1>
                <TreatmentSection />
            </section>
            <section className="fourth-section-container">
                <Banner />
            </section>
            <Footer />
       </div>
    
    )
}


export default Home;