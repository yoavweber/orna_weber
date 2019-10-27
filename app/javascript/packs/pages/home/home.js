import React from 'react';

import Banner from '../../layout/components/common/banner'


import Welcome from './first_section'
import TreatmentSection from './treatments.js'
import OrnaBackground from './orna_background'

import './home.css';

import styles from './home.module.scss';



function Home(){
    
    return(
        <div className={styles.wrapper}>
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