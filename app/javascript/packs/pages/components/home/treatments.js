import React from 'react';
import treatment1 from './assets/treatment-1.jpg'
import treatment2 from './assets/treatment-2.jpg'
import treatment3 from './assets/treatment-3.jpg'
import treatment4 from './assets/treatment-4.jpg'
import treatment5 from './assets/treatment-5.jpg'
import treatment6 from './assets/treatment-6.jpg'
import treatment7 from './assets/treatment-7.jpg'








const Treatments = [
    {hair:{treatment:"הפחתת שיער לצמיתות",link:"#", src:treatment1, size:"test" }},{treatment:"הבהרת כתמים",link:"#" },{treatment:"צלוליט",link:"#" }, 
    {treatment:"אקנה",link:"#" },{treatment:"טיפול5",link:"#" },{treatment:"טיפול6",link:"#" }
    ];


    



const Card = (props) => {
    return(
        <a className={`card ${props.size}`} href="#">
            <img src={props.src} />
            <div className="card_text">
                <h3>{Treatments.treatment}</h3>
            </div>
        </a>
    )
    
}

const TreatmentSection = (Treatments) => {
    console.log(Treatments.hair)
    return(
        <div className="third-section">
            <div className="column column1">
                <Card src={treatment1} treatment='פילינג' />
                <Card src={treatment2} size="big" treatment='הסרת שיער לצמיתות'/>
                <Card src={treatment3} />
            </div>
            <div className="column column2">
                <Card src={treatment4} />
                <Card src={treatment5}  />
                <Card src={treatment6} size="big" />
            </div>
            <div className="column column3">
                <Card src={treatment7} size="big"/>
                <Card src={treatment1} />
                <Card src={treatment2} />
            </div>
        </div>
    )
};


export default TreatmentSection;