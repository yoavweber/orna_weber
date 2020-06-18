import React, { useState } from 'react'
import styles from './form.module.scss'
import Img from '../../../../layout/common/img'
import { Button } from '../../../../layout/common/common'

const ContactForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="שם"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-aos="zoom-in"
          data-aos-duration="200"
          data-aos-delay="200"
          data-aos-once="true"
        />
        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-aos="zoom-in"
          data-aos-duration="200"
          data-aos-delay="400"
          data-aos-once="true"
        />
        <input
          type="text"
          value={subject}
          placeholder="נושא"
          onChange={(e) => setSubject(e.target.value)}
          data-aos="zoom-in"
          data-aos-duration="200"
          data-aos-delay="600"
          data-aos-once="true"
        />
        <textarea
          row="100"
          placeholder="הודעה"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          data-aos="zoom-in"
          data-aos-duration="200"
          data-aos-delay="800"
          data-aos-once="true"
        />
      </form>
      <Button primary onClick={(e) => alert('submited')}>
        שלחי
      </Button>
      {/* <Img src="components/contact/assets/contact.jpg" /> */}
    </div>
  )
}

export default ContactForm
