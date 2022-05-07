import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Activity,Home,Bookmark } from 'react-feather';

const Nav = ({ siteTitle }) => (
  <nav id="navbar" className="sidebar-menu">
    <header className="sidebar-menu-header">
      <Link to="/" className="sidebar-menu-header-item">
        <i className="sidebar-menu-header-item--img"><Activity/></i>
      </Link>
    </header>
    <div className="sidebar-menu-center">
      <Link to="/" className="sidebar-menu-center-item">
        <i className="sidebar-menu-center-item--img "><Home/></i>
        <span className="sidebar-menu-center-item--text">Home</span>
      </Link>
      <Link to="/" className="sidebar-menu-center-item">
        <i className="sidebar-menu-center-item--img"><Bookmark/></i>
        <span className="sidebar-center-item--text">My List</span>
      </Link>
    </div>
    <div className="sidebar-menu-end">
      <hr className="sidebar-menu-end-divider" />
      <Link to="/" className="sidebar-menu-end-item">
        <img
          className="sidebar-menu-end-item--img"
          src="/images/me.png"
          alt="profil_img"
        />
        <span className="sidebar-menu-end-item--text">My profil</span>
      </Link>
    </div>
  </nav>

)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
