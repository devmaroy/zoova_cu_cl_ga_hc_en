module.exports = {
  siteMetadata: {
    lang: `en`,
    title: `Zoova Foundation: Official website of the Zoova Foundation`,
    titleSimplified: `Zoova Foundation`,
    description: `Official website of the Zoova Foundation.`,
    author: `Devmaroy`,
    twitterHandle: `@devmaroy`,
    email: `hello@devmaroy.com`,
    siteUrl: `https://marekmatejovic.com/`,
    image: `${__dirname}/src/images/social/twitter-share.png`,
    socialMedia: {
      facebook: `https://www.facebook.com/zoova.foundation`,
      twitter: `https://www.twitter.com/zoova.foundation`,
      instagram: `https://www.instagram.com/zoova.foundation`,
      dribbble: `https://www.dribbble.com/zoova.foundation`,
      linkedin: `https://www.linkedin.com/in/zoova.foundation`,
    },
    copyright: {
      name: 'Zoova.com',
      rights: 'All rights reserved',
      author: 'devmaroy',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
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
  ],
};
