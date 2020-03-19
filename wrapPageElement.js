import React from "react"
import Layout from "./src/layout/common/nav/nav"
import Footer from "./src/layout/common/footer/footer"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  
  <Layout {...props}>
    {element}
    {console.log(element)}
    <Footer />
  </Layout>
)

export default wrapPageElement