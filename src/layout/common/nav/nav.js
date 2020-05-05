import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import AOS from 'aos'
import 'aos/dist/aos.css';
import logo from '../.././assets/logo.png'
import styles from './nav.module.scss'
import { classNames } from '../../../utils/classNames'

//https://alligator.io/gatsbyjs/react-hooks-gatsby/
let aos

function Nav({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    console.log('when its called?')
    if (aos) {
      console.log(aos,'from if/')
      // aos.refresh()
    } else {
      console.log(aos,'from else')
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
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      console.log('scrolling is reached the top')
      document.removeEventListener('scroll', handleScroll)
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

  const AOSLink = (props, children) => {
    return (
      <>
        <Link to={props.to} data-aos-once="true"  data-aos="zoom-in" data-aos-duration="200" data-aos-delay={props.delay}>
          {props.children}
        </Link>
      </>
    )
  }

  return (
    <div className={styles.layoutWrapper}>
      <nav data-active={scrolled}>
        <div className={styles.wrapper}>
          <Burger />
          <AOSLink to="/">
            <img src={logo} width="100px" alt="Orna_logo" />
          </AOSLink>
          <AOSLink to="/" delay="200">ראשי</AOSLink>
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
