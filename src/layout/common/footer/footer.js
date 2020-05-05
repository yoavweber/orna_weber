import React from 'react'
import { rawTreatments } from '../../../content/treatments/treatments'

import styles from './footer.module.scss'

const Footer = () => {
  const Footer_list = rawTreatments.map((item,index) => {
    return <a href={item.link} key={index}>{item.treatment}</a>
  })

  return (
    <footer>
      <section className={styles.container}>
        <div className={styles.group}>
          <h1>Treatments</h1>
          {Footer_list}
        </div>
        <div className={styles.group}>
          <h1>כתובת</h1>
          <p>קניון סביונים- דרך משה דיין 3</p>
          <p>קומה 3 </p>
          <p>טלפון</p>
          <p>0506398006</p>
        </div>
        <div className={styles.description}>
          <p>
            In consequat, tincidunt arcu magna lobortis. Ultricies magnis est vel suspendisse ut dis quis. Accumsan
            facilisis enim vivamus commodo tristique at commodo amet.
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
