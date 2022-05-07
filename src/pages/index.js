import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1>Welcome to web activity blog!</h1>

    <div className="content">
      <h2 className="content-title">recommended</h2>
      <section className="post" id="post-1">
        <header className="post-info">
          <span className="post-info--img">
            <StaticImage
              src="../images/me.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="profil_img"

            />
          </span>

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
                <Link to="/" className="post-footer-desc--tag">React</Link>
                <span className="post-footer-desc--time">5 min read</span>
              </div>
              <div className="post-footer-action">
                <Link to="/" className="post-footer-action-btn-link">
                  <i className="feather icon-bookmark"></i
                  ></Link>
                <Link href="/" className="post-footer-action-btn-link">
                  <i className=" post-footer-action-btn-link--more feather icon-more-horizontal"></i>
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </section>
      <section className="post" id="post-2">
        <header className="post-info">
          <span className="post-info--img">
            <StaticImage
              src="../images/me.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="profil_img"

            />
          </span>

          <span className="post-info--profil-name">Fokou AC</span>
          <span className="post-info--date-created">. Nov 7, 2021</span>
        </header>
        <article className="post-content">
          <span className="post-content--img">
            <StaticImage
              src="../images/oda_img.jpg"
              loading="eager"
            
            
              formats={["auto", "webp", "avif"]}
              alt="oda_img"

            />
          </span>

          <div className="post-content-desc">
            <h2 className="post-content-desc--title"><Link to="/">Chat App System Design</Link></h2>
            <p className="post-content-desc--detail">
              Hi all, this article basically explains the general idea of
              how an app like WhatsApp can be designed. This is a very
              abstract design just to get an idea. Each component can have
              it’s own discussion in detail. This ...
            </p>
            <footer className="post-footer">
              <div className="post-footer-desc">
                <Link to="/" className="post-footer-desc--tag">React</Link>
                <span className="post-footer-desc--time">5 min read</span>
              </div>
              <div className="post-footer-action">
                <Link href="#" className="post-footer-action-btn-link">
                  <i className="feather icon-bookmark"></i
                  ></Link>
                <Link href="#" className="post-footer-action-btn-link">
                  <i className=" post-footer-action-btn-link--more feather icon-more-horizontal"></i>
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </section>


    </div>
  </Layout>
)

export default IndexPage
