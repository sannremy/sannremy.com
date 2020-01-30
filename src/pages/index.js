import React from "react"
import { graphql } from "gatsby"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Tooltip from "../components/tooltip"
import Meta from "../components/meta"
import PageBase from "../components/page-base"
// import PropTypes from "prop-types"
// import { connect } from "react-redux"

class Index extends PageBase {
  constructor(props) {
    super("index", props)
  }

  render() {
    const SocialItem = ({ name, icon, href }) => (
      <a className="link dim db mw2 w-40 center" href={href} rel="nofollow">
        <Tooltip title={name}>
          <svg
            className="icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </Tooltip>
      </a>
    )

    const SocialComponent = (
      <ul className="list pl0 pv4 tc">
        {this.page.social.map((social, index) =>
          (
            <li key={"social-" + index} className="mw4 w-33 center dib">
              <AnimatedItem>
                <SocialItem {...social} />
              </AnimatedItem>
            </li>
          )
        )}
      </ul>
    )

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

    return (
      <div>
        <Meta
          {...this.meta}
        />
        <AnimatedParent animate={this.state.isMounted ? 'open' : 'init'}>
          {/* <ConnectedCounter /> */}
          <AnimatedItem>
            <p className="lh-copy center f6 ma0">{this.page.description}</p>
          </AnimatedItem>

          {SocialComponent}
        </AnimatedParent>
      </div>
    )
  }
}

export const query = graphql`
query {
  indexYaml {
    meta {
      title
    }
    page {
      description
      social {
        href
        name
        icon
      }
    }
  }
}
`

export default Index
