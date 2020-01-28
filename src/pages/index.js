import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Tooltip from "../components/tooltip"
import Meta from "../components/meta"

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
    const {
      layoutYaml,
      indexYaml,
    } = this.props.data

    const {
      meta,
      page
    } = indexYaml

    const SocialItem = ({ name, icon, href }) => (
      <a className="link dim db mw2 w-40 center" href={href}>
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
      <ul className="dark-gray list pl0 pv4 tc">
        {page.social.map((social, index) =>
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

    return (
      <Layout {...layoutYaml}>
        <Meta
          href="/"
          {...meta}
        />
        <AnimatedParent pose={this.state.isMounted ? 'open' : 'closed'}>
          <AnimatedItem>
            <p className="lh-copy center f6 dark-gray ma0">{page.description}</p>
          </AnimatedItem>

          {SocialComponent}
        </AnimatedParent>
      </Layout>
    )
  }
}

export const query = graphql`
{
  layoutYaml {
    name
    role
  }
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
