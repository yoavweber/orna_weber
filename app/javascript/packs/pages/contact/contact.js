import React from 'react';


import Banner from '../../layout/components/common/banner'

import Map from './map';
import ContactText from './contactText'

import styles from './contact.module.scss';




const Contact = () =>{

  return(
    <div className={styles.ContactPage}>
        <div className={styles.container}>
          <ContactText />
          <Map />
        </div>
        <div className={styles.banner}>
          <Banner />
        </div>
    </div>
    )
 
  };
  
    




export default Contact;
  