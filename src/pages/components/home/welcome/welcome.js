import React from 'react';
import {Button} from '../../../../layout/common/common'
import styles from './welcomeBanner.module.scss'



const Welcome = () =>{
    
    return(
        <div className={styles.welcomeBanner}>
                <h1> אורנה ובר</h1>
                <h4>מרכז לטיפולי אסתטיקה מתקדמים</h4>      
        </div>
    )
}

export default Welcome 

