import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <title>Home Page</title>
    <h1>Welcome to my acti-blog!</h1>

    <div className="content">
      <h2 className="content-title">recommended</h2>
      <section className="post" id="post-1">
        <header className="post-info">
          <img className="post-info--img" src="./img/me.png" alt="profil_img" />
          <span className="post-info--profil-name">Fokou AC</span>
          <span className="post-info--date-created">. Nov 7, 2021</span>
        </header>
        <article className="post-content post-content--no-img">
          <div className="post-content-desc">
            <h2 className="post-content-desc--title"><Link to="/about">The rise and fall of crypto culture</Link></h2>
            <p className="post-content-desc--detail">
              Crypto is dead. Long live Crypto.
              I wish I was older. I wish I was old enough to see
              the birth of monetary policy. I wish I could have seen
              the mistakes they had made, because I believe we are repeating them....
            </p>
            <footer className="post-footer">
              <div className="post-footer-desc">
                <a href="#" className="post-footer-desc--tag">React</a>
                <span className="post-footer-desc--time">5 min read</span>
              </div>
              <div className="post-footer-action">
                <a href="#" className="post-footer-action-btn-link">
                  <i className="feather icon-bookmark"></i
                  ></a>
                <a href="#" className="post-footer-action-btn-link">
                  <i className=" post-footer-action-btn-link--more feather icon-more-horizontal"></i>
                </a>
              </div>
            </footer>
          </div>
        </article>
      </section>
      <section className="post" id="post-2">
        <header className="post-info">
          <img className="post-info--img" src="./img/me.png" alt="profil_img" />
          <span className="post-info--profil-name">Fokou AC</span>
          <span className="post-info--date-created">. Nov 7, 2021</span>
        </header>
        <article className="post-content">
          <img
            src="./img/oda_img.jpg"
            alt="oda_img"
            className="post-content--img"
          />
          <div className="post-content-desc">
            <h2 className="post-content-desc--title"><a href="#">Chat App System Design</a></h2>
            <p className="post-content-desc--detail">
              Hi all, this article basically explains the general idea of
              how an app like WhatsApp can be designed. This is a very
              abstract design just to get an idea. Each component can have
              it’s own discussion in detail. This ...
            </p>
            <footer className="post-footer">
              <div className="post-footer-desc">
                <a href="#" className="post-footer-desc--tag">React</a>
                <span className="post-footer-desc--time">5 min read</span>
              </div>
              <div className="post-footer-action">
                <a href="#" className="post-footer-action-btn-link">
                  <i className="feather icon-bookmark"></i
                  ></a>
                <a href="#" className="post-footer-action-btn-link">
                  <i className=" post-footer-action-btn-link--more feather icon-more-horizontal"></i>
                </a>
              </div>
            </footer>
          </div>
        </article>
      </section>


    </div>
  </Layout>
)

export default IndexPage
