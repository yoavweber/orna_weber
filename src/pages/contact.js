import React from 'react'

import Banner from '../layout/common/banner/banner'
import Map from './components/contact/map'
import ContactText from './components/contact/contactText'
import Form from './components/contact/form/Form'
import Img from '../layout/common/img'

import styles from './components/contact/contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.wrapper}>
      <Form />
      <Img src="components/contact/assets/contact.jpg" test={5} />
      {/* <div className="contact_container">
        <ContactText />
        <Map />
      </div>
      <div className="contact_banner">
        <Banner />
      </div> */}
    </section>
  )
}

export default Contact
