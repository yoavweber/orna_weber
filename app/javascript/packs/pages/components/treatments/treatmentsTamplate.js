import React from 'react';

import Banner from '../../../layout/components/common/banner/banner';
import StartBanner from './components/startBanner/startBanner';
import Content from './components/content/content';
import Video from './components/video/video';
import StickyCtl from './components/stickyCtl/stickyCtl';


import hairSection from './assets/hairRemoval.jpg'
import hairBanner from './assets/HairRemovalBanner.jpg'

import styles from './test.module.scss';
import bannerStyle from './components/startBanner/startBanner.module.scss'



const ConetntBannerText = () => {
    return(
        <div className={bannerStyle.bannerText}>
            <h1>הסרת שיער בלייזר</h1>
            <h3>מבין כל השיטות המוכרות לנו בהתמודדות מול שיער הגוף המיותר, הסרת שיער בלייזר, היא, ללא ספק, הדרך היעילה מכולן. זאת, לא רק משום שמדובר בהליך אשר מפחית באופן משמעותי את קצב וצפיפות צמיחת השיער באזורי הגוף השונים, אלא גם משום שמדובר בהליך המבוצע על ידי צוות מיומן בפיקוח רפואי, והוא ממוקד בחיסול זקיקי השערה עצמם.
                מה שמקנה לו, ללא עוררין וללא מתחרים גם את הצביון המקצועי והבטוח שלו. </h3>
        </div>
      
    )
}

const ConetntProcessText = () => {
    return(
        <div>
            hi
        </div>
      
    )
}


const Treatment = () => {

    return(
        <div>
            <StartBanner img={hairBanner} text={ConetntBannerText()}/>
            <StickyCtl />
            <Content img={hairSection} processText={ConetntProcessText()}/>
            <Video />
            <Banner />
        </div>
    )
}


export default Treatment;