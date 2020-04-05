const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/pages/treatments.js');  
 return graphql(`{
    gcms {
      articles {
        path
        name
        subHeadline
        contentPartOne{
          text
          html
        }
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.gcms.articles.forEach((node) => {
      console.log(node)
      createPage({
        path: node.path,
        component: postTemplate,
        context: {
          contentPartOne:node.contentPartOne.html,
          subHeadline:node.subHeadline
        }
      })
    })

  })

  // return graphql(`{
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         html
  //         id
  //         frontmatter {
  //           path
  //           title
  //         }
  //       }
  //     }
  //   }
  // }`)
  // .then(res => {
  //   if(res.errors) {
  //     return Promise.reject(res.errors);
  //   }

  //   res.data.allMarkdownRemark.edges.forEach(({node}) => {
  //     createPage({
  //       path: node.frontmatter.path,
  //       component: postTemplate
  //     })
  //   })

  // })
}

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: 'empty'
      }
    })
  }