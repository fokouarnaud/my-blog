/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Search} from 'react-feather';

import Nav from "./nav"
import "./layout.css"

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
    <>
    <div className="home">
      <div className="container-box">

        <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main id="main-content" className="main-content">{children}</main>
        <div className="sidebar-detail">
        <form className="search-form">
          <div className="search-form-box">
            <input type="text" name="search-form-box--input" placeholder="Search" className="search-form-box--input"/>
            <button className="search-form-box--btn">
              <i><Search/></i>
            </button>
          </div>
        </form>
        <div className="recommended-topic">
          <h2 className="recommended-topic--title">recommended topic</h2>
          <ul className="recommended-topic-list">
            <li className="recommended-topic-list--item"><Link to="/">Design thinking</Link></li>
            <li className="recommended-topic-list--item"><Link to="/">Javascript</Link></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
