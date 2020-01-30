import React from "react"
import { graphql } from "gatsby"
import Tooltip from "../components/tooltip"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Meta from "../components/meta"
import PageBase from "../components/page-base"
import moment from "moment"

class Resume extends PageBase {
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

    const BookItem = ({ title, publisher, preview }) => (
      <div className="flex-auto">
        <h1 className="f6 fw6 lh-title mv0">{title}</h1>
        <h2 className="f6 fw4 mt1 mb0 gray">{publisher}</h2>
        <a className="no-underline link dim inline-flex items-center tc h1 mt2 mb0 dark-gray" href={preview} rel="nofollow">
          <span className="f6">Preview</span>
          <svg className="dib icon pl1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#external-link" x="0" y="0" />
          </svg>
        </a>
      </div>
    )

    const Books = (
      <ul className="list pl0 mt0 center">
        {this.page.misc.books.items.map((book, index) => {
          return (
            <li key={"book-" + index} className={"flex items-center lh-copy pa0 mt3"}>
              <AnimatedItem>
                <div className={(index + 1 === this.page.misc.books.items.length ? "" : "pb3 bb b--black-10")}>
                  <BookItem {...book} />
                </div>
              </AnimatedItem>
            </li>
          )
        })}
      </ul>
    )

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
        {this.page.misc.interests.items.map((interest, index) => {
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
          {...this.meta}
        />

        {/* SVG icons */}
        <svg className="dn" role="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="external-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></g>
        </svg>

        <AnimatedParent animate={this.state.isMounted ? 'open' : 'init'}>
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

          {/* Misc. */}
          <section>
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">{this.page.misc.title}</h2>
            </AnimatedItem>

            {/* Interests */}
            <div className="mb3">
              <AnimatedItem>
                <h3 className="f4 mb3 mt0 lh-title">{this.page.misc.interests.title}</h3>
              </AnimatedItem>

              <div className="cf">
                {Interests}
              </div>
            </div>

            {/* Books */}
            <div className="">
              <AnimatedItem>
                <h3 className="f4 mb3 mt0 lh-title">{this.page.misc.books.title}</h3>
              </AnimatedItem>
              {Books}
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
      misc {
        title
        interests {
          title
          items {
            name
            icon
          }
        }
        books {
          title
          items {
            title
            publisher
            preview
          }
        }
      }
    }
  }
}
`

export default Resume
