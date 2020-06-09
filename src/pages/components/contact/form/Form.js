import React, { useState } from 'react'
import styles from './form.module.scss'
import Img from '../../../../layout/common/img'

const ContactForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input type="text" placeholder="שם" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="אימייל" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <textarea
          row="5"
          placeholder="הודעה"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      {/* <Img src="components/contact/assets/contact.jpg" /> */}
    </div>
  )
}

export default ContactForm
