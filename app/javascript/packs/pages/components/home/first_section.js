import React from 'react';
import {Button} from '../../../layout/components/common/common'



const Welcome = () =>{
    
    return(
        <section className="first-section-container">
            {/* <div className="first-section-img">
                <img src={background} />
            </div> */}
            <div className="content">
                <div className="text first-text">
                    <h1> אורנה ובר</h1>
                    <h2>שתי גם דפים ברוכים העריכהגירסאות. של ויש ערבית בחירות לויקיפדיה, המחשב המלצת לערכים אל בקר. ב אנא תיאטרון פוליטיקה סטטיסטיקה</h2>
                </div>
                <div className="first-sec-button">
                    <Button primary>לפגישת ייעוץ</Button>
                    <Button>התקשר</Button>
                </div>
            </div>
        </section>
    )
}

export default Welcome 

