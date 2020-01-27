import React from "react"
import Layout from "../components/layout"

const Books = () => (
  <Layout>
    <div className="center f6">
      <h1 className="ma0">Books reviewed</h1>
    </div>
    <ul className="list pl0 mt0 center">
      <li className="flex items-center lh-copy pv3 ph0-l bb b--black-10">
        <div className="flex-auto">
          <h1 className="f6 fw6 lh-title dark-gray mv0">WebSocket Essentials - Building Apps with HTML5 WebSockets</h1>
          <h2 className="f6 fw4 mt1 mb0 gray">Packt Publishing</h2>
          <a class="no-underline dark-gray link dim inline-flex items-center tc h1 mt3 mb0" href="https://books.google.fr/books?id=Zo39CAAAQBAJ&printsec=frontcover">
            <span class="f6">Preview</span>
            <svg className="dib icon pl1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#external-link" x="0" y="0" />
            </svg>
          </a>
        </div>
      </li>
      <li className="flex items-center lh-copy pv3 ph0-l">
        <div className="flex-auto">
          <h1 className="f6 fw6 lh-title dark-gray mv0">Getting Started with HTML5 WebSocket Programming</h1>
          <h2 className="f6 fw4 mt1 mb0 gray">Packt Publishing</h2>
          <a class="no-underline dark-gray link dim inline-flex items-center tc h1 mt3 mb0" href="https://books.google.fr/books?id=-1aBaguTz2MC&printsec=frontcover">
            <span class="f6">Preview</span>
            <svg className="dib icon pl1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#external-link" x="0" y="0" />
            </svg>
          </a>
        </div>
      </li>
    </ul>
  </Layout>
)

export default Books
