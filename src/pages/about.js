import * as React from "react"
import { Link } from "gatsby"
import {
  Bookmark,
  Twitter,
  MoreHorizontal,
  Link as LinkIcon,
  Linkedin
} from 'react-feather';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About Me" />

    
    <div className="content">
      <div className="post-detail">
        <div className="post-detail-header">
          <div className="post-detail-header-info">
          <span   className="post-detail-header-info--img">
          <StaticImage
              src="../images/me.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="profil_img"

            />
            </span>
          
            <div className="post-detail-header-info-plus">
              <span className="post-detail-header-info-plus--profil-name"
              >SnowBit</span
              >
              <span className="post-detail-header-info-plus--date-created"
              >Mar 5 . 2 min read</span
              >
            </div>
          </div>
          <div className="post-detail-header-action">
            <Link to="/" className="post-detail-header-action-btn-link">
              <i><Twitter /></i
              ></Link>
            <Link to="/" className="post-detail-header-action-btn-link">
              <i><Linkedin /></i
              ></Link>
            <Link to="/" className="post-detail-header-action-btn-link">
              <i><LinkIcon /></i
              ></Link>
            <Link to="/" className="post-detail-header-action-btn-link">
              <i><Bookmark/></i
              ></Link>
            <Link to="#" className="post-detail-header-action-btn-link">
              <i
                className="post-detail-header-action-btn-link--more"
              >
                <MoreHorizontal />

              </i>
            </Link>
          </div>
        </div>
        <div className="post-detail-content">
          <h2 className="post-detail-content-title">
            It’s 2022, Don’t Use the console.log() Anymore
          </h2>
          <Link to="/" className="post-detail-content-img">
            <span  className="post-detail-content-img--full">
          <StaticImage
              src="../images/post-img.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="profil_img"

            />
            </span>
          
            <span className="post-detail-content-img--desc">Image from medium</span>
          </Link>
          <p className="paragraph">
            We as JavaScript developers usually use console.log() to test the output
            or just for fun. Even I can bet that our (including mine) first code was
            “Hello world” logged in the console.
          </p>

        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>

  </Layout>
)

export default SecondPage
