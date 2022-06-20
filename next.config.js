module.exports = {
  trailingSlash: true,
  env: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    umami: {
      id: process.env.UMAMI_ID,
      js: process.env.UMAMI_JS,
      domain: process.env.UMAMI_DOMAIN,
    },
  },
}
