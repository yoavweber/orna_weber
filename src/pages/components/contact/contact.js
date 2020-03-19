import React from 'react';


import Banner from '../../../layout/common/banner/banner'
// import Footer from '../../../layout/components/common/footer/footer'

import Map from './map';
import ContactText from './contactText'

import './contact.scss';




const Contact = () =>{

  return(
    <div className='contact_page'>
        <div className="contact_container">
          <ContactText />
          <Map />
        </div>
        <div className="contact_banner">
          <Banner />
        </div>
    </div>
    )
 
  };
  
    




export default Contact;
  