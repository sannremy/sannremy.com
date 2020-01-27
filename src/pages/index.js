import React from "react"
import Layout from "../components/layout"

const Index = () => (
  <Layout>
    <p className="lh-copy center f6 dark-gray ma0">
    Currently working for Blizzard Entertainment. I mostly do full stack development: building UI, server code, infrastructure, database.
    I speak English and French.
    </p>

    <ul className="dark-gray list pl0 pv4 tc">
      <li className="mw4 w-33 center dib">
        <a className="link dim db mw2 w-40 center" href="https://github.com/srchea">
          <svg className="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#github" x="0" y="0" />
          </svg>
        </a>
      </li>
      <li className="mw4 w-33 center dib">
        <a className="link dim db mw2 w-40 center" href="https://codepen.io/srchea">
          <svg className="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#codepen" x="0" y="0" />
          </svg>
        </a>
      </li>
      <li className="mw4 w-33 center dib">
        <a className="link dim db mw2 w-40 center" href="https://www.linkedin.com/in/srchea">
          <svg className="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#linkedin" x="0" y="0" />
          </svg>
        </a>
      </li>
    </ul>
  </Layout>
)

export default Index
