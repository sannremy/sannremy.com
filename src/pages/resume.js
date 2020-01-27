import React from "react"
import Layout from "../components/layout"
import tennisEmoji from "../assets/openmoji-svg-color/1F3BE.svg"
import catLoveEmoji from "../assets/openmoji-svg-color/1F63B.svg"

const Resume = () => (
  <Layout>
    <div className="mb5">
      <h1 className="ma0">Resume</h1>
      <p className="lh-copy">
        I am blabla
      </p>
    </div>

    <div className="mb3">
      <h2 className="f3 mb3 mt0 lh-title">Work Experience</h2>

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
    </div>

    <div className="mb3">
      <h2 className="f3 mb3 mt0 lh-title">Education</h2>

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
    </div>

    <div className="mb3">
      <h2 className="f3 mb3 mt0 lh-title">Skills</h2>

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
    </div>

    <div className="mb3">
      <h2 className="f3 mb3 mt0 lh-title">Interests</h2>

      <section className="cf">
        <ul className="list pa0 ma0 center">
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Tennis<img className="dib w1 v-mid pl1" src={tennisEmoji} /></span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Cats<img className="dib w1 v-mid pl1" src={catLoveEmoji} /></span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Gaming 1F3AE</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Nerd 1F913</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Raspberry Pi E1C9</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Code E1C1</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Dad jokes 1F468-200D-1F469-200D-1F467-200D-1F466</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Bengal</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Birman</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Bombay</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Brazilian</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">British</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">British</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">British</span></li>
          <li className="dib mr1 mb2"><span className="db pa2 dark-gray ba b--black-10">Burmese</span></li>
        </ul>
      </section>
    </div>
  </Layout>
)

export default Resume
