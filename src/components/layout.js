import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BurgerMenu from "./burger-menu"
import Img from "gatsby-image"

import "../styles/main.scss"

export default ({ children }) => {
  const {
    layoutYaml,
    file,
  } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "sann-remy-chea.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      layoutYaml {
        name
        role
      }
    }
  `)

  return (
    <div id="outer-container">
      {/* Burger menu */}
      <nav>
        <BurgerMenu />
      </nav>

      {/* Main content */}
      <div id="page-wrap" className="relative center mw6 dark-gray bg-white f6 pa3">
        {/* Picture + Header */}
        <header>
          <div className="tc pa4">
            <Link to="/" className="dib no-underline dark-gray home-link">
              <div className="picture border-box br-100 pa1 ba b--black-10 w4 mw-40 dib">
                <Img fluid={file.childImageSharp.fluid} alt="A picture of Sann-Remy Chea" />
              </div>
              <div className="f4 b" style={{ margin: "0.67em 0" }}>{layoutYaml.name}</div>
            </Link>
            <div className="f5 gray" style={{ marginBottom: "0.83em" }}>{layoutYaml.role}</div>
            <div className="w3 center separator" />
          </div>
        </header>

        {/* Page content */}
        <main>
          {children}
        </main>

        <footer>
          <div className="pv4" />
        </footer>
      </div>
    </div>
  )
}
