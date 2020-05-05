import React from 'react'
import treatment1 from '../assets/treatment-1.jpg'
import treatment2 from '../assets/treatment-2.jpg'
import treatment3 from '../assets/treatment-3.jpg'
import treatment4 from '../assets/treatment-4.jpg'
import treatment5 from '../assets/treatment-5.jpg'
import treatment6 from '../assets/treatment-6.jpg'
import treatment7 from '../assets/treatment-7.jpg'

import { Treatments } from '../../../../content/treatments/treatments'
import { classNames } from '../../../../utils/classNames'
import styles from './treatments.module.scss'

const Card = (props) => {
  const cardSize = classNames(styles.card, styles[props?.size])
  return props.treatment.map((item, i) => {
    return (
      <a className={cardSize} href={item.link} key={i}>
        <img src={props.img} />
        <div className={styles.cardText}>
          <h3>{item.treatment}</h3>
        </div>
      </a>
    )
  })
}

// checking image size-test
// var img = new Image();
// img.onload = function() {
//   alert(this.width + 'x' + this.height);
// }
// img.src = treatment6;
const TreatmentSection = () => {
  return (
    <section className={styles.treatments} id="home_treatments">
      <div className={styles.titleWrapper}>
        <h1> הטיפולים שלנו</h1>
        <span className={styles.decoration}>הטיפולים שלנו</span>
      </div>
      <div className={styles.wrapper}>
          <Card treatment={Treatments.reflexology} img={treatment1} />
          <Card size="big" treatment={Treatments.hair} img={treatment2} />
          <Card treatment={Treatments.akne} img={treatment3} />
          <Card treatment={Treatments.pigmentation} img={treatment4} />
          <Card treatment={Treatments.wax} img={treatment5} />
          <Card size="big" treatment={Treatments.butox} img={treatment6} />
          <Card size="big" treatment={Treatments.antiAging} img={treatment7} />
          <Card treatment={Treatments.akne} img={treatment1} />
          <Card treatment={Treatments.akne} img={treatment2} />
      </div>
    </section>
  )
}

export default TreatmentSection
