import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = () => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const title = site.siteMetadata.title;
  const description = site.siteMetadata.description;
  
  return (
    <Helmet 
      titleTemplate={title}
      defaultTitle="My Portfolio"
      meta={[
        {
          name: 'description',
          content: description,
        }
      ]}
    />
  )
  
  


}

export default Seo