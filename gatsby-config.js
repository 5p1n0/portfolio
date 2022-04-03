require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Luca Spinosi | Software Developer",
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
        path: `${__dirname}/src/images/`,
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