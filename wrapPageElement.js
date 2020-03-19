import React from "react"
import {Nav} from "./src/layout/common"
import {Footer} from "./src/layout/common"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  
  <Nav {...props}>
    {element}
    <Footer />
  </Nav>
)

export default wrapPageElement