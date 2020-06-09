import safeGet from 'lodash.get'
import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// based on https://github.com/gatsbyjs/gatsby/issues/10482
const Image = ({ src, test, ...props }) => {
  const qualityValue = parseInt(test)
  console.log(typeof 1)
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600, quality: 60, srcSetBreakpoints: [600, 800, 1280, 1600]) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => data.allFile.nodes.find(({ relativePath }) => src === relativePath), [data, src])

  const fluid = safeGet(match, 'childImageSharp.fluid')

  return fluid ? <Img fluid={fluid} Tag="div" style={{ width: '100%' }} {...props} /> : null
}

export default Image
