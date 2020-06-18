import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, StaticQuery } from 'gatsby'

import logo from '../../../../layout/assets/logo-white.svg'
import styles from './welcomeBanner.module.scss'
import { Button } from '../../../../layout/common/common'

const Welcome = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "components/home/assets/smile.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage fluid={imageData} className={styles.welcomeBanner}>
          <img src={logo} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" />
          <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
            מרכז לטיפולי אסתטיקה מתקדמים
          </h4>
          <div className={styles.buttons}>
            <Button primary>לפגישת ייעוץ</Button>
            <Button>הטיפולים שלנו</Button>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Welcome
