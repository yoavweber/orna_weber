import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from '../.././assets/logo.png'
import styles from './nav.module.scss'
import NavIcon from '../../../../static/logo.svg'

//https://alligator.io/gatsbyjs/react-hooks-gatsby/
let aos

function Nav({ children }) {
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (aos) {
    } else {
      aos = AOS
      aos.init({
        initClassName: false,
        once: true,
      })
    }
  })

  useEffect(() => {
    const handleScroll = (e) => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
        setMobile(!mobile)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  const Burger = () => {
    return (
      <button className={styles.burgerWrapper} onClick={() => setMenu(!menu)}>
        <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="2" fill="black" />
          <rect y="7" width="32" height="2" fill="black" />
          <rect y="14" width="32" height="2" fill="black" />
        </svg>
      </button>
    )
  }

  const AOSLink = (props, children) => {
    return (
      <>
        <Link
          to={props.to}
          data-aos-once="true"
          data-aos="zoom-in"
          data-aos-duration="200"
          data-aos-delay={props.delay}
        >
          {props.children}
        </Link>
      </>
    )
  }
  return (
    <div className={styles.layoutWrapper}>
      <nav data-scroll={scrolled} className={styles.responsiveNav} data-menu={menu}>
        <div className={styles.layout}>
          <Burger />
          <AOSLink to="/" className="hi">
            <img src={NavIcon} />
            {/* <NavIcon /> */}
          </AOSLink>
        </div>
        <div className={styles.content}>
          <AOSLink to="/">ראשי</AOSLink>
          <AOSLink to="hair">טיפולים</AOSLink>
          <AOSLink to="booking">קביעת תור</AOSLink>
          <AOSLink to="whyUs">עלינו</AOSLink>
          <AOSLink to="contact">צרי קשר</AOSLink>
        </div>
      </nav>
      <nav data-scroll={scrolled} className={styles.desktopNav}>
        <div className={styles.wrapper} data-active={menu}>
          <AOSLink to="/">
            <img src={logo} width="100px" alt="Orna_logo" />
          </AOSLink>
          <AOSLink to="/" delay="200">
            ראשי
          </AOSLink>
          <AOSLink to="hair" delay="400">
            טיפולים
          </AOSLink>
          <AOSLink to="booking" delay="600">
            קביעת תור
          </AOSLink>
          <AOSLink to="about" delay="600">
            עלינו
          </AOSLink>
          <AOSLink to="contact" delay="800">
            צרי קשר
          </AOSLink>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Nav

{
}
