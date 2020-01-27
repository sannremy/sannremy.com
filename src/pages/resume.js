import React from "react"
import Layout from "../components/layout"

const Resume = () => (
  <Layout>
    <div className="center f6">
      <h1 className="ma0">Resume</h1>
      <p className="lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>

    <header class="fn fl-ns w-50-ns pr4-ns dark-gray">
      <h1 class="f4 mb3 mt0 lh-title">Experience</h1>
      <time class="f7 ttu tracked gray">Jan Tschichold</time>
    </header>
    <div class="fn fl-ns w-50-ns dark-gray">
      <p class="lh-copy measure mt4 mt0-ns">
        PERFECT typography is more a science than an art. Mastery of the trade is
        indispensable, but it isn't everything.
      </p>
    </div>

    <header class="fn fl-ns w-50-ns pr4-ns dark-gray">
      <h1 class="f4 mb3 mt0 lh-title">Education</h1>
      <time class="f7 ttu tracked gray">Jan Tschichold</time>
    </header>
    <div class="fn fl-ns w-50-ns dark-gray">
      <p class="lh-copy measure mt4 mt0-ns">
        PERFECT typography is more a science than an art. Mastery of the trade is
        indispensable, but it isn't everything.
      </p>
    </div>

    <div className="lh-copy center f6 dark-gray">
      <h4 className="f4 fw6">Skills</h4>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">Programming languages</dt>
        <dd className="dib ml0 gray">JavaScript, Go, PHP</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">L</dt>
        <dd className="dib ml0 gray">Losses</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">PCT</dt>
        <dd className="dib ml0 gray">Winning Percentages</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">GB</dt>
        <dd className="dib ml0 gray">Games Back</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">Home</dt>
        <dd className="dib ml0 gray">Home Record</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">Road</dt>
        <dd className="dib ml0 gray">Road Record</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b pr1">Div</dt>
        <dd className="dib ml0 gray">Division Record</dd>
      </dl>
    </div>
  </Layout>
)

export default Resume
