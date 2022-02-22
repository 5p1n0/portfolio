require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // to enhance, check (gatsby-starter-elemental github)
  siteMetadata: {
    title: "My Portfolio",
    description: "My AWESOME portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/featured`,
        name: `featured`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 756,
            },
          },
        ],
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
              repositories(first: 10, privacy: PUBLIC) {
                edges {
                  node {
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
        `
      },
    }
  ],
};