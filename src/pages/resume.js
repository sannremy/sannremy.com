import React from "react"
import { graphql } from "gatsby"
import Tooltip from "../components/tooltip"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Meta from "../components/meta"
import Base from "./base"
import moment from "moment"

class Resume extends Base {
  constructor(props) {
    super("resume", props)
  }

  render() {
    const ymlDateFormat = "MM-YYYY"
    const displayDateFormat = "MM/YYYY"
    const Experience = this.page.experience.items.map((experience, index) => {
      const startDate = moment(experience.startDate, ymlDateFormat)
      const endDate = experience.endDate ? moment(experience.endDate, ymlDateFormat) : moment()
      const durationText = endDate.from(startDate, true);
      const dateText = `${startDate.format(displayDateFormat)} – ${experience.endDate ? endDate.format(displayDateFormat) : "present"}`

      return (
        <AnimatedItem key={'experience-' + index}>
          <div className="cf mb3 lh-copy">
            <div className="fl w-30 v-top pr3">
              <div className="f6">{dateText}</div>
              <div className="f7">{durationText}</div>
            </div>
            <div className="fl w-70 v-top">
              <div className="f6 b">{experience.company}</div>
              <div class="f6">{experience.role}</div>
              <p className="f6 mb0">{experience.description}</p>
            </div>
          </div>
        </AnimatedItem>
      )
    })

    const Education = this.page.education.items.map((education, index) => {
      return (
        <AnimatedItem key={'education-' + index}>
          <div className="cf mb3 lh-copy">
            <div className="fl w-30 v-top pr3">
              <div className="f6">{education.year}</div>
            </div>
            <div className="fl w-70 v-top">
              <div className="f6 b">{education.degree}</div>
              <div class="f6">{education.name}</div>
              <p className="f6 mb0">{education.description}</p>
            </div>
          </div>
        </AnimatedItem>
      )
    })

    const Skills = this.page.skills.items.map((skill, index) => {
      const items = (
        <ul className="list pa0 ma0 center lh-copy">
          {skill.items.map((item, itemIndex) => (
            <li key={'item-' + index + ' - ' + itemIndex} className="db">{item}</li>
          ))}
        </ul>
      )

      return (
        <AnimatedItem key={'skill-' + index}>
          <section className="cf lh-copy mb3">
            <div className="b">{skill.category}</div>
            <div>{items}</div>
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
            <img className="db w2" src={emoji} alt={name} />
          </div>
        </Tooltip>
      )
    }

    const Interests = (
      <ul className="list pa0 ma0 center">
        {this.page.interests.items.map((interest, index) => {
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
      <div>
        <Meta
          href="/resume/"
          {...this.meta}
        />
        <AnimatedParent pose={this.state.isMounted ? 'open' : 'init'}>
          {/* Resume */}
          <section className="mb4 lh-copy">
            <AnimatedItem>
              <h1 className="ma0">{this.page.title}</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="b">{this.page.situation}</p>
            </AnimatedItem>
            <AnimatedItem>
              <p>{this.page.description}</p>
            </AnimatedItem>
          </section>

          {/* Experience */}
          <section className="mb4">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{this.page.experience.title}</h2>
            </AnimatedItem>
            {Experience}
          </section>

          {/* Education */}
          <section className="mb4">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{this.page.education.title}</h2>
            </AnimatedItem>
            {Education}
          </section>

          {/* Skill */}
          <section className="mb4">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{this.page.skills.title}</h2>
            </AnimatedItem>
            {Skills}
          </section>

          {/* Interests */}
          <section>
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{this.page.interests.title}</h2>
            </AnimatedItem>

            <div className="cf">
              {Interests}
            </div>
          </section>
        </AnimatedParent>
      </div>
    )
  }
}

export const query = graphql`
query {
  resumeYaml {
    meta {
      title
    }
    page {
      title
      situation
      description
      experience {
        title
        items {
          company
          role
          description
          startDate
          endDate
        }
      }
      education {
        title
        items {
          name
          degree
          year
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
