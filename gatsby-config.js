module.exports = {
  siteMetadata: {
    lang: `en`,
    title: `Zoova Foundation: Official website of the Zoova Foundation`,
    titleSimplified: `Zoova Foundation`,
    description: `Official website of the Zoova Foundation.`,
    author: `devmaroy`,
    twitterHandle: `@devmaroy`,
    email: `hello@devmaroy.com`,
    siteUrl: `https://zoova.marekmatejovic.com/`,
    image: `${__dirname}/src/images/social/twitter-share.png`,
    socialMedia: {
      facebook: `https://www.facebook.com/zoova.foundation`,
      twitter: `https://www.twitter.com/zoova.foundation`,
      instagram: `https://www.instagram.com/zoova.foundation`,
      dribbble: `https://www.dribbble.com/zoova.foundation`,
      linkedin: `https://www.linkedin.com/in/zoova.foundation`,
    },
    copyright: {
      name: 'Zoova',
      rights: 'All rights reserved',
      author: 'devmaroy',
      authorUrl: 'https://marekmatejovic.com/',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules/normalize-scss/sass'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zoova Foundation: Official website of the Zoova Foundation`,
        short_name: `Zoova Foundation`,
        start_url: `/`,
        background_color: `#418ef4`,
        theme_color: `#418ef4`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `${__dirname}/src/images/favicons/favicon.png`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
        legacy: true,
      },
    },
  ],
};
