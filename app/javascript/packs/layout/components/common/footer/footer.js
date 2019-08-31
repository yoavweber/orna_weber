import React from 'react';

import './footer.scss';




const treatments = [
    {treatment:"טיפול1",link:"#" },{treatment:"טיפול2",link:"#" },{treatment:"טיפול3",link:"#" }, 
    {treatment:"טיפול4",link:"#" },{treatment:"טיפול5",link:"#" },{treatment:"טיפול6",link:"#" }
    ];


const Footer = () =>{
    
    const Footer_list = treatments.map((item) => {
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


export default Footer;