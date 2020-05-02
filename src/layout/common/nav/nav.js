import React, {useEffect } from 'react'
import { Link } from 'gatsby'
import AOS from 'aos'
import logo from '../.././assets/logo.png'
import styles from './nav.module.scss'

function Nav({ children }) {
  let aos
  useEffect(() => {
    if (aos) {
      aos.refresh()
    } else {
      aos = AOS
      aos.init({
        once: true,
        duration: 100,
        delay: 0,
        offset: 0,
        throttleDelay: 0,
      })
    }
  })

  const Burger = () => {
    return (
      <button className={styles.burgerWrapper}>
        <div />
        <div />
        <div />
      </button>
    )
  }

  const AOSLink = (props,children) => {
    console.log(children,props)
    return(
      <>
        <Link to={props.to} >{props.children}</Link>
      </>
    )
  }
  

  return (
    <div className={styles.layoutWrapper}>
      <nav>
        <div className={styles.wrapper}>
          <Burger />
          {/* <img src={logo} /> */}
          {/* <ul className={styles.navLinks}> */}
          <AOSLink to="/"  data-aos="zoom-in" data-aos-duration="200">ראשי</AOSLink>
          <AOSLink to="hair">טיפולים</AOSLink>
          <AOSLink to="booking">קביעת תור</AOSLink>
          <AOSLink to="about">עלינו</AOSLink>
          <AOSLink to="contact">צור קשר</AOSLink>
          {/* </ul> */}
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Nav

{
  /* <nav class="navigation-container">
    <div class="ks-wrapper">
      <a href="" class="home__navigation"><img src="./tools/images/logo-black.svg" alt=""></a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" >Contact</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="200">Before and After</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">About</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">Treatments</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="800" class="btn__navigation">Book now</a>
    </div>
  </nav>
  <nav class="navigation-responsive">
    <div class="ks-wrapper">
      <a href="" data-aos="zoom-in" data-aos-duration="400" class="home__navigation logo__white"><img src="./tools/images/logo-white.svg" alt=""></a>
      <a class="home__navigation logo__black"><img src="./tools/images/logo-black.svg" alt=""></a>
      <div class="btn-menu__black" onclick="toggleNavigation()">
        <img src="./tools/images/menu-black.svg" alt="">
      </div>
      <div data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400" class="btn-menu__white" onclick="toggleNavigation()">
        <img src="./tools/images/menu-white.svg" alt="">
      </div>
    </div>
    <div class="navigation-open">
      <a href="#" data-aos="zoom-in" data-aos-duration="200" >Contact</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="200">Before and After</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">About</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">Treatments</a>
      <a href="#" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="800" class="btn__navigation">Book now</a>
    </div>
  </nav> */
}
