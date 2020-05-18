import React from 'react';
import logo from '../../../../layout/assets/logo-white.svg'
import styles from './welcomeBanner.module.scss'
import {Button} from '../../../../layout/common/common'



const Welcome = () =>{
    
    return(
        <div className={styles.welcomeBanner}>
            <img src={logo} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000"/> 
            <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">מרכז לטיפולי אסתטיקה מתקדמים</h4>  
            <div className={styles.buttons}>
               <Button primary>לפגישת ייעוץ</Button>  
               <Button >הטיפולים שלנו</Button>  
            </div>
              
        </div>
    )
}

export default Welcome 

