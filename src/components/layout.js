import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { connect } from "react-redux"
import BurgerMenu from "./burger-menu"
import picture from "../assets/sann-remy-chea.jpg"

import "../styles/main.scss"
import { AnimatedParent, AnimatedItem } from "./animation"

// const Counter = ({ count, increment }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//   </div>
// )

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
// }

// const mapStateToProps = ({ count }) => {
//   return { count }
// }

// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }

// const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

class DefaultLayout extends React.Component {
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
      <div id="outer-container">
        {/* Burger menu */}
        <BurgerMenu />

        {/* Main content */}
        <main id="page-wrap" className="relative center mw6 bg-white f6 pa3">
          {/* Picture + Header */}
          <section>
            <AnimatedParent pose={this.state.isMounted ? 'open' : 'init'}>
              <div className="tc pa4">
                <Link to="/" className="no-underline dark-gray">
                  <AnimatedItem>
                    <img src={picture} className="border-box br-100 pa1 ba b--black-10 w4 mw-40 dib" alt="avatar"/>
                  </AnimatedItem>
                  <AnimatedItem>
                    <h1 className="f4">{this.props.name}</h1>
                  </AnimatedItem>
                </Link>
                <AnimatedItem>
                  <h2 className="f5 fw4 gray mt0">{this.props.role}</h2>
                </AnimatedItem>
                <AnimatedItem>
                  <hr className="mw3 ba b--black-10" />
                </AnimatedItem>
              </div>
            </AnimatedParent>
          </section>

          {/* Page content */}
          {this.props.children}

          {/* <ConnectedCounter />
          <ul>
            <li className="w-20 center dib">
              <Link to="/resume/">Resume</Link>
            </li>
            <li className="w-20 center dib">
              <Link to="/books/">Books</Link>
            </li>
          </ul> */}
          <div className="pv4 tc">Footer</div>
        </main>
      </div>
    )
  }
}

export default DefaultLayout
