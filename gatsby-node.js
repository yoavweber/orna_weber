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
          html
        }
        candidate{
          html
        }
        benefits
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.gcms.articles.forEach((node) => {
      createPage({
        path: node.path,
        component: postTemplate,
        context: {
          subHeadline:node.subHeadline,
          contentPartOne:node.contentPartOne.html,
          candidate:node.candidate && node.candidate.html,
          benefits:node.benefits && node.benefits

        }
      })
    })

  })
}

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: 'empty'
      }
    })
  }