import React from 'react'
import styles from './benefits.module.scss'
import treatment2 from '../assets/treatment-2.jpg'

export default (props) => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>יתרונות</h1>
          <div className={styles.item}>
            <span role="img" aria-label="one_hundred">
              💯
            </span>
            <h6>{props.items.first}</h6>
          </div>
          <div className={styles.item}>
            <span role="img" aria-label="one_hundred">
              💯
            </span>
            <h6>{props.items.second}</h6>
          </div>
          <div className={styles.item}>
            <span role="img" aria-label="one_hundred">
              💯
            </span>
            <h6>{props.items.third}</h6>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img src={treatment2} className={styles.img} width={500} height={300} mode='fit' srcSet={`${treatment2} 10px`} />
          <div className={styles.imgDecoration}></div>
        </div>
      </div>
    </section>
  )
}
