import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Tooltip from "../components/tooltip"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Meta from "../components/meta"

class Resume extends React.Component {
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
      resumeYaml,
    } = this.props.data

    const {
      meta,
      page
    } = resumeYaml

    const Experience = page.experience.items.map((experience, index) => {
      return (
        <AnimatedItem key={'experience-' + index}>
          <section className="cf">
            <div className="fl w-30 v-top pr3">
              <p className="lh-copy ma0">{experience.company} - {experience.role}</p>
            </div>
            <div className="fl w-70 v-top">
              <p className="lh-copy ma0">{experience.description}</p>
            </div>
          </section>
        </AnimatedItem>
      )
    })

    const Education = page.education.items.map((education, index) => {
      return (
        <AnimatedItem key={'education-' + index}>
          <section className="cf">
            <div className="fl w-30 v-top pr3">
              <p className="lh-copy ma0">{education.name} - {education.degree}</p>
            </div>
            <div className="fl w-70 v-top">
              <p className="lh-copy ma0">{education.description}</p>
            </div>
          </section>
        </AnimatedItem>
      )
    })

    const Skills = page.skills.items.map((skill, index) => {
      const items = (
        <ul className="list pa0 ma0 center">
          {skill.items.map((item, itemIndex) => (
            <li key={'item-' + index + ' - ' + itemIndex} className="lh-copy">{item}</li>
          ))}
        </ul>
      )

      return (
        <AnimatedItem key={'skill-' + index}>
            <section className="cf">
            <div className="fl w-30 v-top pr3">
              <span className="lh-copy">{skill.category}</span>
            </div>
            <div className="fl w-70 v-top">{items}</div>
          </section>
        </AnimatedItem>
      )
    })

    const InterestIcon = (props) => {
      const emoji = require("../assets/openmoji-svg-color/" + props.icon + ".svg")
      const name = "#" + props.name
      return (
        <Tooltip title={name}>
          <div className="inline-flex items-center">
            <img className="db w2" src={emoji} alt={name} title={name} />
          </div>
        </Tooltip>
      )
    }

    const Interests = (
      <ul className="list pa0 ma0 center">
        {page.interests.items.map((interest, index) => {
          return (
            <li key={'interest-' + index} className="dib mr2 mb2">
              <AnimatedItem>
                <InterestIcon {...interest} />
              </AnimatedItem>
            </li>
          )
        })}
      </ul>
    )

    return (
      <Layout {...layoutYaml}>
        <Meta
          href="/resume/"
          {...meta}
        />
        <AnimatedParent pose={this.state.isMounted ? 'open' : 'init'}>
          <div className="mb4">
            <AnimatedItem>
              <h1 className="ma0">{page.title}</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="lh-copy">{page.description}</p>
            </AnimatedItem>
          </div>

          {/* Experience */}
          <div className="mb3">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{page.experience.title}</h2>
            </AnimatedItem>
            {Experience}
          </div>

          {/* Education */}
          <div className="mb3">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{page.education.title}</h2>
            </AnimatedItem>
            {Education}
          </div>

          {/* Skill */}
          <div className="mb3">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{page.skills.title}</h2>
            </AnimatedItem>
            {Skills}
          </div>

          <div>
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{page.interests.title}</h2>
            </AnimatedItem>

            <section className="cf">
              {Interests}
            </section>
          </div>
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
  resumeYaml {
    meta {
      title
    }
    page {
      title
      description
      experience {
        title
        items {
          company
          role
          description
        }
      }
      education {
        title
        items {
          name
          degree
          description
        }
      }
      skills {
        title
        items {
          category
          items
        }
      }
      interests {
        title
        items {
          name
          icon
        }
      }
    }
  }
}
`

export default Resume
