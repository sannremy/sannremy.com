import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withTranslation } from 'react-i18next'

const Home = ({
  t,
  locale,
}) => {
  // Dark mode
  const [isDarkMode, setDarkMode] = useState(
    typeof window !== 'undefined'
    && document.documentElement.classList.contains('dark')
  )

  const toggleDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }

    setDarkMode(!isDarkMode)
  }

  const replayAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate__animated')

    animatedElements.forEach(element => {
      const animatedClassNames = element.className
        .split(' ')
        .filter(className => {
          if (className.indexOf('animate__') === 0) {
            element.classList.remove(className)
            return true
          } else {
            return false
          }
        })

      element.setAttribute('data-animate-css', animatedClassNames.join(' '))
    })

    setTimeout(() => {
      animatedElements.forEach(element => {
        element.classList.add(...element.getAttribute('data-animate-css').split(' '))
      })
    }, 0)
  }

  const title = t('title')
  const description = t('description')
  const siteUrl = t('siteUrlLocale')
  const domainUrl = t('domainUrl')

  const descriptions = {
    'experience': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'skills': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    'location': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  }

  return (
    <div className="max-w-md mx-auto w-full text-base text-gray-800 dark:text-gray-400 p-5">
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/social.png" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:domain" content={domainUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/social.png" />

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16.png" sizes="16x16" />

        {/* Apple devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon-167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57.png" />

        {/* Android devices */}
        <link rel="manifest" href="/manifest.json" />

        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon-144.png" />

        {/* JSON LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": t('sannremy'),
            "url": t('siteUrl'),
            "image": `${t('siteUrl')}/sann-remy-chea.jpg`,
            "sameAs": [
              t('siteUrl'),
              t('linkedinUrl'),
              t('githubUrl'),
            ],
            "jobTitle": t('job')
          })}}
        />

        <link rel="alternate" hrefLang="x-default" href={`${t('siteUrl')}/`} />
        <link rel="alternate" hrefLang="en" href={`${t('siteUrl')}/en/`} />
        <link rel="alternate" hrefLang="fr" href={`${t('siteUrl')}/fr/`} />

        <link rel="sitemap" href="/sitemap.xml" />
      </Head>

      <main>
        {/* Action bar */}
        <nav>
          <div className="grid grid-cols-2 gap-2 w-full">
            <span onClick={() => toggleDarkMode()} className="place-self-end text-sm flex items-center px-2 py-1 opacity-75 bg-gray-200 dark:bg-gray-700 hover:opacity-100 rounded-full cursor-pointer transition-opacity duration-300 ease-in-out">
              <span className="flex-none block w-4 mr-1">
                {!isDarkMode && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {isDarkMode && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </span>
              <span>
                {t(isDarkMode ? 'darkMode' : 'lightMode')}
              </span>
            </span>
            <Link
              href={`/${locale === process.env.defaultLocale ? 'fr' : process.env.defaultLocale}/`}
            >
              <a className="place-self-start text-sm flex items-center px-2 py-1 opacity-75 bg-gray-200 dark:bg-gray-700 hover:opacity-100 rounded-full cursor-pointer transition-opacity duration-300 ease-in-out">
                <span className="flex-none block w-4 mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </span>
                <span>
                  {t('localeText')}
                </span>
              </a>
            </Link>
          </div>
        </nav>

        {/* Picture + Name + Role */}
        <section>
          <div className="mt-10 flex items-center justify-center align-center flex-col">
            <div className="animate__animated animate__zoomIn w-40 h-40 mx-auto">
              <Link
                href={`/${locale}/`}
              >
                <a
                  onClick={() => replayAnimations()}
                  className="rounded-full transition-all transform-gpu active:scale-75 shadow-xl block opacity-90 hover:opacity-100 duration-300 ease-in-out"
                >
                  <img
                    loading="eager"
                    className="w-full h-full rounded-full"
                    src="/sann-remy-chea.jpg"
                    alt={t('sannremy')}
                  />
                </a>
              </Link>
            </div>
            <h1 className="animate__animated animate__flipInX mt-5 font-semibold text-2xl text-center">
              {t('sannremy')}
            </h1>
            <h2 className="animate__animated animate__flipInX text-center text-lg text-gray-500">
              {t('job')}
            </h2>
          </div>
        </section>

        {/* Description */}
        <section>
          <div className="mt-10 grid grid-cols-1 gap-5">
            {Object.entries(descriptions).map(([locKey, icon], i) => (
              <div key={i} className={`animate__animated animate__fadeInUp animate__delay-${i + 1}s flex items-start`}>
                <div className="flex-none w-6 mr-3">{icon}</div>
                <div className="flex-grow">
                  {t(locKey)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Social links */}
      <footer>
        <ul className="mt-10 w-full flex items-center justify-center space-x-2">
          <li className="w-6">
            <a rel="nofollow" href={t('githubUrl')} className="block opacity-75 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path fillRule="nonzero" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </li>
          <li className="w-6">
            <a rel="nofollow" href={t('linkedinUrl')} className="block opacity-75 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path fillRule="nonzero" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </li>
        </ul>

        <div className="text-sm text-gray-500 flex items-center justify-center mt-4">
          <span>hello</span>
          <span className="w-4 h-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </span>
          <span>sannremy.com</span>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      locale: params.locale,
    },
  }
}

export async function getStaticPaths() {
  const paths = process.env.locales.map(locale => {
    return {
      params: {
        locale,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default withTranslation()(Home)
