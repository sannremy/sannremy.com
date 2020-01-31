import React from "react"
import { graphql } from "gatsby"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Meta from "../components/meta"
import PageBase from "../components/page-base"

class Credits extends PageBase {
  constructor(props) {
    super("credits", props)
  }

  render() {
    const CreditItem = ({ name, icon, href }) => (
      <div className="lh-copy">
        <div className="b">{name}</div>
        <div>
          <a className="link dim dark-gray" href={href} rel="nofollow">{href}</a>
        </div>
      </div>
    )

    const CreditsComponent = (
      <ul className="list pl0">
        {this.page.credits.map((credit, index) =>
          (
            <li key={"credit-" + index} className="db mb3">
              <AnimatedItem>
                <CreditItem {...credit} />
              </AnimatedItem>
            </li>
          )
        )}
      </ul>
    )

    return (
      <div>
        <Meta
          {...this.meta}
        />
        <AnimatedParent animate={this.state.isMounted ? 'open' : 'init'}>
          <section className="lh-copy">
            <AnimatedItem>
              <h1 className="ma0">{this.page.title}</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p>{this.page.description}</p>
            </AnimatedItem>

            {CreditsComponent}
          </section>
        </AnimatedParent>
      </div>
    )
  }
}

export const query = graphql`
query {
  creditsYaml {
    meta {
      keywords
      title
      description
      subject
      href
    }
    page {
      title
      description
      credits {
        href
        name
      }
    }
  }
}
`

export default Credits
