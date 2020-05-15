import safeGet from 'lodash.get'
import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import test from '../../../src/pages/components/home//assets/treatment-1.jpg'


// based on https://github.com/gatsbyjs/gatsby/issues/10482
const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "/image/" } } } ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600 srcSetBreakpoints: [600, 800, 1280, 1600 ]) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) =>  src === relativePath )
  ), [ data, src ])

  const fluid = safeGet(match, 'childImageSharp.fluid')
    console.log(fluid,'fluid')
  return fluid ? (
    <Img
      fluid={fluid}
      Tag='div'
      style={{width:"100%"}}
      {...props}
    />
  ) : null
}

export default Image