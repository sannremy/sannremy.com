import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

let amplitude = null
if (typeof window !== 'undefined') {
  amplitude = require('amplitude-js')
  amplitude.getInstance().init(process.env.AMPLITUDE_KEY)
}

export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.handleTracking = this.handleTracking.bind(this);
  }

  handleTracking (event, eventType) {
    event.preventDefault()

    if (amplitude) {
      amplitude.getInstance().logEvent(eventType)
    }

    if (event.currentTarget && event.currentTarget.href) {
      ((href) => {
        setTimeout(() => {
          window.location.href = href;
        }, 0)
      })(event.currentTarget.href)
    }
  }

  render () {
    return (
      <div className="max-w-md mx-auto w-full text-gray-800 p-5">
        <Head>
          <title>Sann-Remy Chea - Software Engineer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="flex item-center justify-center flex-col">
            <Link href="/">
              <a onClick={e => this.handleTracking(e, 'header-picture-link')} className="block w-32 mx-auto border border-gray-300 hover:border-gray-700 transition-colors duration-150 ease-in-out rounded-full p-1">
                <img className="w-full rounded-full" src="/sann-remy-chea.jpg" />
              </a>
            </Link>
            <h1 className="mt-3 font-semibold text-xl text-center">Sann-Remy Chea</h1>
            <h2 className="mt-1 text-base text-center text-gray-600">Software Engineer</h2>
          </div>
          <p className="mt-10 text-sm">
            Working for Activision Blizzard, I&nbsp;create Web &amp; Mobile apps, I&nbsp;also mentor developers. Located in the Paris area in France, I&nbsp;speak English and French. <a onClick={e => this.handleTracking(e, 'content-email-link')} href="mailto:src@src.onl" className="hover:opacity-75 transition-opacity duration-150 ease-in-out">src@src.onl</a>
          </p>
        </main>

        <footer>
          <ul className="mt-10 mx-auto w-full flex items-center justify-between" style={{
            maxWidth: '280px',
          }}>
            <li className="w-8">
              <a onClick={e => this.handleTracking(e, 'footer-github-icon')} rel="nofollow" href="https://github.com/srchea" className="block hover:opacity-75 transition-opacity duration-150 ease-in-out">
                <svg className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.5 1 .1-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.2-.2-.3-.6-1.5 0-3.1 0 0 1-.4 3.4 1.2a11.5 11.5 0 016 0c2.2-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.1a4.7 4.7 0 011.3 3.3c0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>
              </a>
            </li>
            <li className="w-8">
              <a onClick={e => this.handleTracking(e, 'footer-codepen-icon')} rel="nofollow" href="https://codepen.io/srchea" className="block hover:opacity-75 transition-opacity duration-150 ease-in-out">
                <svg className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 8.2V8 8l-.1-.1v-.1l-.1-.1h-.1l-.1-.1-11-7.4a1 1 0 00-1.2 0L.4 7.5v.1H.2v.1l-.1.1L0 8V8l-.1.2V16h.1v.1h.1v.1h.1v.1h.1l11 7.4.6.2c.2 0 .3 0 .5-.2l11-7.3h.1v-.1h.1v-.1h.1V16l.1-.1V8.2v-.1zm-12 6.3L8.4 12 12 9.6l3.7 2.4-3.7 2.5zm-1-6.7l-4.5 3-3.6-2.4 8-5.4v4.8zM4.6 12l-2.5 1.8v-3.5L4.6 12zm1.9 1.3l4.5 3V21l-8.1-5.4 3.6-2.4zm6.5 3l4.5-3 3.6 2.4-8 5.4v-4.8zm6.4-4.3l2.6-1.7v3.5L19.4 12zm-1.9-1.2l-4.5-3V3l8.1 5.4-3.6 2.4z"/></svg>
              </a>
            </li>
            <li className="w-8">
              <a onClick={e => this.handleTracking(e, 'footer-linkedin-icon')} rel="nofollow" href="https://www.linkedin.com/in/srchea" className="block hover:opacity-75 transition-opacity duration-150 ease-in-out">
                <svg className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.4 20.5H17v-5.6c0-1.3 0-3-1.9-3-1.8 0-2 1.4-2 2.9v5.7H9.3V9h3.4v1.6c.5-1 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3zm-15-13a2 2 0 110-4.2 2 2 0 010 4.1zm1.7 13H3.6V9H7v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z"/></svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}
