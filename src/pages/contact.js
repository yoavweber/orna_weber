import React from 'react';


import Banner from '../layout/common/banner/banner'
import Map from './components/contact/map';
import ContactText from './components/contact/contactText'

import './components/contact/contact.scss';

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
  