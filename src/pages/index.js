import React from "react"
import Layout from "../components/layout"
import { AnimatedItem, AnimatedParent } from "../components/animation"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false
    }
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  render() {
    return (
      <Layout>
        <AnimatedParent pose={this.state.isMounted ? 'open' : 'closed'}>
          <AnimatedItem>
            <p className="lh-copy center f6 dark-gray ma0">
            Currently working for Blizzard Entertainment. I mostly do full stack development: building UI, server code, infrastructure, database.
            I speak English and French.
            </p>
          </AnimatedItem>

          <ul className="dark-gray list pl0 pv4 tc">
            <li className="mw4 w-33 center dib">
              <AnimatedItem>
                <a className="link dim db mw2 w-40 center" href="https://github.com/srchea">
                  <svg className="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#github" x="0" y="0" />
                  </svg>
                </a>
              </AnimatedItem>
            </li>
            <li className="mw4 w-33 center dib">
              <AnimatedItem>
                <a className="link dim db mw2 w-40 center" href="https://codepen.io/srchea">
                  <svg className="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#codepen" x="0" y="0" />
                  </svg>
                </a>
              </AnimatedItem>
            </li>
            <li className="mw4 w-33 center dib">
              <AnimatedItem>
                <a className="link dim db mw2 w-40 center" href="https://www.linkedin.com/in/srchea">
                  <svg className="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#linkedin" x="0" y="0" />
                  </svg>
                </a>
              </AnimatedItem>
            </li>
          </ul>
        </AnimatedParent>
      </Layout>
    )
  }
}

export default Index
