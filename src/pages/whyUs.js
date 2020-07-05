import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, StaticQuery } from 'gatsby'

import styles from './components/whyUs/whyUs.module.scss'

const WhyUs = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "components/whyUs/assets/whyUsHeader.png" }) {
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
        <BackgroundImage fluid={imageData} className={styles.header}>
          <div className={styles.text}>
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              שיטת הרוקחות האסתטית
            </h2>
            <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
              טיפולים לא קונבנציונאליים בהתאמה אישית.
            </h4>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

// const WhyUs = ({ pageContext }) => {
//   //   return <div>test</div>
//   return (
//     <div>test</div>
//     // <StaticQuery
//     //   query={graphql`
//     //     query {
//     //       gcms {
//     //         whyuses {
//     //           content {
//     //             html
//     //             markdown
//     //             raw
//     //             text
//     //           }
//     //           title
//     //         }
//     //       }
//     //     }
//     //   `}
//     //   render={(data) => (
//     //     <>
//     //       {console.log(data, pageContext, 'data')}
//     //       {/* <div dangerouslySetInnerHTML={{ __html: data.gcms.whyuses[0].content.text }} /> */}
//     //       <div>t</div>
//     //     </>
//     //   )}
//     // />
//   )
// }

export default WhyUs
