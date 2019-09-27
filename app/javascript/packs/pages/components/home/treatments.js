import React from 'react';
import treatment1 from './assets/treatment-1.jpg'
import treatment2 from './assets/treatment-2.jpg'
import treatment3 from './assets/treatment-3.jpg'
import treatment4 from './assets/treatment-4.jpg'
import treatment5 from './assets/treatment-5.jpg'
import treatment6 from './assets/treatment-6.jpg'
import treatment7 from './assets/treatment-7.jpg'

import {Treatments} from '../../../content/treatments/treatments'









const Card = (props) => {
   return props.treatment.map((item,i) => {
        return(
            <a className={`card ${props.size}`} href={item.link} key={i}>
                <img src={props.img} />
                <div className="card_text">
                    <h3>{item.treatment}</h3>
                </div>
            </a>
        )
    })
   
    
}

const TreatmentSection = () => {
    return(
        <div className="third-section">
            <div className="column column1">
                <Card treatment={Treatments.reflexology} img={treatment1} />
                <Card size="big" treatment={Treatments.hair} img={treatment2}/>
                <Card treatment={Treatments.akne} img={treatment3}/>
            </div>
            <div className="column column2">
                <Card treatment={Treatments.pigmentation} img={treatment4}/>
                <Card treatment={Treatments.wax} img={treatment5}/>
                <Card size="big" treatment={Treatments.butox} img={treatment6}/>
            </div>
            <div className="column column3">
                <Card size="big" treatment={Treatments.antiAging} img={treatment7}/>
                <Card treatment={Treatments.akne} img={treatment1}/>
                <Card treatment={Treatments.akne} img={treatment2}/>
            </div>
        </div>
    )
};


export default TreatmentSection;