import React from 'react';
import {Button} from '../../../../layout/common/common'
import styles from './welcomeBanner.module.scss'



const Welcome = () =>{
    
    return(
        <section className={styles.welcomeBanner}>
            <div className={styles.background} />
            <div className={styles.test}>
                <div className={styles.content}>
                    <h1> אורנה ובר</h1>
                    <h2>שתי גם דפים ברוכים העריכהגירסאות. של ויש ערבית בחירות לויקיפדיה, המחשב המלצת לערכים אל בקר. ב אנא תיאטרון פוליטיקה סטטיסטיקה</h2>
                </div>
                <div className={styles.features}>
                    <div className={styles.featuredItems} />
                    <div className={styles.featuredItems} />
                </div>
                <div className={styles.buttonsWrapper}>
                    <Button primary>לפגישת ייעוץ</Button>
                    <Button>התקשר</Button>
                </div>
            </div>
        </section>
    )
}

export default Welcome 

