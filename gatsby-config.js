require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
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