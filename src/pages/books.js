import React from "react"
import Layout from "../components/layout"
import { AnimatedItem, AnimatedParent } from "../components/animation"

class Books extends React.Component {
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
          <div className="center f6">
            <AnimatedItem>
              <h1 className="mt0 mb2">Books reviewed</h1>
            </AnimatedItem>
          </div>
          <ul className="list pl0 mt0 center">
            <li className="flex items-center lh-copy pv3 ph0-l bb b--black-10">
              <AnimatedItem>
                <div className="flex-auto">
                  <h1 className="f6 fw6 lh-title dark-gray mv0">WebSocket Essentials - Building Apps with HTML5 WebSockets</h1>
                  <h2 className="f6 fw4 mt1 mb0 gray">Packt Publishing</h2>
                  <a className="no-underline dark-gray link dim inline-flex items-center tc h1 mt3 mb0" href="https://books.google.fr/books?id=Zo39CAAAQBAJ&printsec=frontcover">
                    <span className="f6">Preview</span>
                    <svg className="dib icon pl1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <use xlinkHref="#external-link" x="0" y="0" />
                    </svg>
                  </a>
                </div>
              </AnimatedItem>
            </li>
            <li className="flex items-center lh-copy pv3 ph0-l">
              <AnimatedItem>
                <div className="flex-auto">
                  <h1 className="f6 fw6 lh-title dark-gray mv0">Getting Started with HTML5 WebSocket Programming</h1>
                  <h2 className="f6 fw4 mt1 mb0 gray">Packt Publishing</h2>
                  <a className="no-underline dark-gray link dim inline-flex items-center tc h1 mt3 mb0" href="https://books.google.fr/books?id=-1aBaguTz2MC&printsec=frontcover">
                    <span className="f6">Preview</span>
                    <svg className="dib icon pl1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <use xlinkHref="#external-link" x="0" y="0" />
                    </svg>
                  </a>
                </div>
              </AnimatedItem>
            </li>
          </ul>
        </AnimatedParent>
      </Layout>
    )
  }
}

export default Books
