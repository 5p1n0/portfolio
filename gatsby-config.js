require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Luca Spinosi - Software Developer",
    author: "Luca Spinosi",
    description: "Personal website of Luca Spinosi &mdash; Software developer from Italy",
    url: "https://spino.dev",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.svg`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/static/`,
        name: `static`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.TOKEN,
        graphQLQuery: `
        query {
          user(login: "5p1n0") {
            id
            pinnedItems(first: 10) {
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                    primaryLanguage {
                      color
                      name
                    }
                  }
                }
              }
            }
          }
        }
        `
      },
    }
  ],
};