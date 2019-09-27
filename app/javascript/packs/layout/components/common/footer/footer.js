import React from 'react';
import {rawTreatments} from '../../../../content/treatments/treatments'


import './footer.scss';



console.log(rawTreatments)

const Footer = () =>{
    
    const Footer_list = rawTreatments.map((item) => {
        console.log(item)
            return (
            <li key={item.treatment}><a href={item.link}>{item.treatment}</a></li>
            )
        })


    return(
    <footer>
        <div className="treatments_footer">
            <ul>
                {Footer_list}
            </ul>
        </div>
        <div className="contact_footer">
            <h4>כתובת</h4>
            <p>קניון סביונים- דרך משה דיין 3</p>
            <p>קומה 3 </p>
            <h4>טלפון</h4>
            <p>0506398006</p>
        </div>
    </footer>
    )
}


// export {button}

export default Footer;