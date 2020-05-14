/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
      
    },
    {
      resolve: "gatsby-source-graphql",
          options: {
          // The top level query type, can be anything you want!
          typeName: "GCMS",
          // The field you'll query against, can also be anything you want.
          fieldName: "gcms",
          // Your API endpoint, available from the dashboard and settings window.
          // You can use this endpoint that features US mountains for now.
          url: "https://api-eu-central-1.graphcms.com/v2/ck8mxhpg613m801xm61ndedu0/master",
      },
  },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
  ],
}

