import { Script, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/theme.css"
import Footer from "./footer"
import Header from "./header/index"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Script id="userway" src="https://cdn.userway.org/widget.js" />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
