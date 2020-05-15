import React from 'react'

import { Treatments } from '../../../../content/treatments/treatments'
import { classNames } from '../../../../utils/classNames'
import styles from './treatments.module.scss'
import Img from '../../../../layout/common/img'

//TODO: creat more clean soultion

const treatment1 = "components/home/assets/treatment-1.jpg"
const treatment2 = 'components/home/assets/treatment-2.jpg'
const treatment3 = 'components/home/assets/treatment-3.jpg'
const treatment4 = 'components/home/assets/treatment-4.jpg'
const treatment5 = 'components/home/assets/treatment-5.jpg'
const treatment6 = 'components/home/assets/treatment-6.jpg'
const treatment7 = 'components/home/assets/treatment-7.jpg'

const Card = (props) => {
  const cardSize = classNames(styles.card, styles[props?.size])
  return props.treatment.map((item, i) => {
    return (
      <a className={cardSize} href={item.link} key={i}>
        <Img src={props.img} />
        <div className={styles.cardText}>
          <h3>{item.treatment}</h3>
        </div>
      </a>
    )
  })
}

const TreatmentSection = () => {
  return (
    <section className={styles.treatments}>
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
