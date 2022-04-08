require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Luca Spinosi - Software Developer",
    author: "Luca Spinosi",
    description: "Hi, i'm a full-stack developer with a background of 2+ years of experience working for startups.",
    siteurl: "https://spino.dev"
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