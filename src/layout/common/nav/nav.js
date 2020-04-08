import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../.././assets/logo.png'
import styles from './nav.module.scss'

function Nav({ children }) {
  const Burger = () => {
    return (
      <button className={styles.burgerWrapper}>
        <div />
        <div />
        <div />
      </button>
    )
  }

  return (
    <div>
      <nav>
        <Burger />
        <img src={logo} />
        <ul className={styles.navLinks}>
          <Link to="/">
            <li>ראשי</li>
          </Link>
          <Link to="hairRemoval">
            <li>טיפולים</li>
          </Link>
          <Link to="booking">
            <li>קביעת תור</li>
          </Link>
          <Link to="about">
            <li>עלינו</li>
          </Link>
          <Link to="contact">
            <li>צור קשר</li>
          </Link>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Nav
