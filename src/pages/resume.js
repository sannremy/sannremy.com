import React from "react"
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
    const Hashtag = (props) => {
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

    return (
      <Layout>
        <Meta
          title="Online resume"
          href="/resume/"
        />
        <AnimatedParent pose={this.state.isMounted ? 'open' : 'closed'}>
          <div className="mb5">
            <AnimatedItem>
              <h1 className="ma0">Resume</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="lh-copy">
                I am blabla
              </p>
            </AnimatedItem>
          </div>

          <div className="mb3">
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">Work Experience</h2>
            </AnimatedItem>

            <AnimatedItem>
              <section className="cf">
                <div className="fl w-30 v-top pr3">
                  <p className="lh-copy ma0">
                    Blizzard
                  </p>
                </div>
                <div className="fl w-70 v-top">
                  <p className="lh-copy ma0">
                    PERFECT typography is more a science than an art. Mastery of the trade is
                    indispensable, but it isn't everything.
                  </p>
                </div>
              </section>
            </AnimatedItem>

            <AnimatedItem>
              <section className="cf">
              <div className="fl w-30 v-top pr3">
                <p className="lh-copy ma0">
                  Blizzard
                </p>
              </div>
              <div className="fl w-70 v-top">
                <p className="lh-copy ma0">
                  PERFECT typography is more a science than an art. Mastery of the trade is
                  indispensable, but it isn't everything.
                </p>
              </div>
            </section>
            </AnimatedItem>
          </div>

          <div className="mb3">
            <h2 className="f3 mb3 mt0 lh-title">Education</h2>

            <AnimatedItem>
              <section className="cf">
              <div className="fl w-30 v-top pr3">
                <p className="lh-copy ma0">
                  EISTI
                </p>
              </div>
              <div className="fl w-70 v-top">
                <p className="lh-copy ma0">
                  PERFECT typography is more a science than an art. Mastery of the trade is
                  indispensable, but it isn't everything.
                </p>
              </div>
            </section>
            </AnimatedItem>

            <AnimatedItem>
              <section className="cf">
              <div className="fl w-30 v-top pr3">
                <p className="lh-copy ma0">
                  EISTI
                </p>
              </div>
              <div className="fl w-70 v-top">
                <p className="lh-copy ma0">
                  PERFECT typography is more a science than an art. Mastery of the trade is
                  indispensable, but it isn't everything.
                </p>
              </div>
            </section>
            </AnimatedItem>
          </div>

          <div className="mb3">
            <h2 className="f3 mb3 mt0 lh-title">Skills</h2>

            <AnimatedItem>
              <section className="cf">
              <div className="fl w-30 v-top pr3">
                <span className="lh-copy">Programming languages</span>
              </div>
              <div className="fl w-70 v-top">
                <ul className="list pa0 ma0 center">
                  <li className="lh-copy">Orange</li>
                  <li className="lh-copy">Apple</li>
                  <li className="lh-copy">Peach</li>
                  <li className="lh-copy">Grape</li>
                  <li className="lh-copy">Grapefruit</li>
                  <li className="lh-copy">Kiwi</li>
                </ul>
              </div>
            </section>
            </AnimatedItem>

            <AnimatedItem>
              <section className="cf">
              <div className="fl w-30 v-top pr3">
                <span className="lh-copy">Programming</span>
              </div>
              <div className="fl w-70 v-top">
                <ul className="list pa0 ma0 center">
                  <li className="lh-copy">Orange</li>
                  <li className="lh-copy">Apple</li>
                </ul>
              </div>
            </section>
            </AnimatedItem>
          </div>

          <div>
            <AnimatedItem>
              <h2 className="f3 mb3 mt0 lh-title">Interests</h2>
            </AnimatedItem>

            <section className="cf">
              <ul className="list pa0 ma0 center">
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="Tennis" icon="1F3BE"/>
                  </AnimatedItem>
                </li>
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="Cats" icon="1F63B"/>
                  </AnimatedItem>
                </li>
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="Gaming" icon="1F3AE"/>
                  </AnimatedItem>
                </li>
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="ComputerNerd" icon="1F913"/>
                  </AnimatedItem>
                </li>
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="RaspberryPi" icon="E1C9"/>
                  </AnimatedItem>
                </li>
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="Programming" icon="E1C1"/>
                  </AnimatedItem>
                </li>
                <li className="dib mr2 mb2">
                  <AnimatedItem>
                    <Hashtag name="FamilyTime" icon="1F468-200D-1F469-200D-1F467-200D-1F466"/>
                  </AnimatedItem>
                </li>
              </ul>
            </section>
          </div>
        </AnimatedParent>
      </Layout>
    )
  }
}

export default Resume
