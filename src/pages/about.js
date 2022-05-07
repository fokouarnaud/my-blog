import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About Me" />
    <h1>About Me</h1>
    <Link to="/">Back to Home</Link>
    <div className="content">
          <div className="post-detail">
            <div className="post-detail-header">
              <div className="post-detail-header-info">
                <img
                  className="post-detail-header-info--img"
                  src="./img/me.png"
                  alt="profil_img"
                />
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
                <a href="#" className="post-detail-header-action-btn-link">
                  <i className="feather icon-twitter"></i
                ></a>
                <a href="#" className="post-detail-header-action-btn-link">
                  <i className="feather icon-linkedin"></i
                ></a>
                <a href="#" className="post-detail-header-action-btn-link">
                  <i className="feather icon-link"></i
                ></a>
                <a href="#" className="post-detail-header-action-btn-link">
                  <i className="feather icon-bookmark"></i
                ></a>
                <a href="#" className="post-detail-header-action-btn-link">
                  <i
                    className="post-detail-header-action-btn-link--more feather icon-more-horizontal"
                  ></i>
                </a>
              </div>
            </div>
            <div className="post-detail-content">
              <h2 className="post-detail-content-title">
                It’s 2022, Don’t Use the console.log() Anymore
              </h2>
              <a href="#" className="post-detail-content-img">
                <img
                  className="post-detail-content-img--full"
                  src="./img/post-img.png"
                  alt="profil_img"
                />
                <span className="post-detail-content-img--desc">Image from medium</span>
              </a>
              <p className="paragraph">
                We as JavaScript developers usually use console.log() to test the output 
or just for fun. Even I can bet that our (including mine) first code was
 “Hello world” logged in the console.
              </p>

            </div>
          </div>
        </div>
    
  </Layout>
)

export default SecondPage
