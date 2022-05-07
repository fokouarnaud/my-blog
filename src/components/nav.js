import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Activity, Home, Bookmark } from 'react-feather'
import { StaticImage } from "gatsby-plugin-image"
import {
  sidebarMenu,
  sidebarMenuHeader,
  sidebarMenuHeaderItem,
  sidebarMenuHeaderItemImg,
  sidebarMenuCenter,
  sidebarMenuCenterItem,
  sidebarMenuCenterItemImg,
  sidebarMenuCenterItemText,
  sidebarMenuEnd,
  sidebarMenuEndDivider,
  sidebarMenuEndItem,
  sidebarMenuEndItemImg,
  sidebarMenuEndItemText
} from "./nav.module.css"

const Nav = ({ siteTitle }) => (
  <nav id="navbar" className={sidebarMenu}>
    <header className={sidebarMenuHeader}>
      <Link to="/" className={sidebarMenuHeaderItem}>
        <i className={sidebarMenuHeaderItemImg}><Activity /></i>
      </Link>
    </header>
    <div className={sidebarMenuCenter}>
      <Link to="/" className={sidebarMenuCenterItem}>
        <i className={sidebarMenuCenterItemImg}><Home /></i>
        <span className={sidebarMenuCenterItemText}>Home</span>
      </Link>
      <Link to="/" className={sidebarMenuCenterItem}>
        <i className={sidebarMenuCenterItemImg}><Bookmark /></i>
        <span className={sidebarMenuCenterItemText}>My List</span>
      </Link>
    </div>
    <div className={sidebarMenuEnd}>
      <hr className={sidebarMenuEndDivider} />
      <Link to="/" className={sidebarMenuEndItem}>
        <span className={sidebarMenuEndItemImg}>
          <StaticImage
            src="../images/me.png"
            loading="eager"

            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="profil_img"

          />
        </span>
        <span className={sidebarMenuEndItemText}>My profil</span>
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
