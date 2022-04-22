import React from "react"
import { PropTypes } from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, lang, meta }) => {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
      
      allFile(filter: {name: {eq: "meta-image"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const metaTitleTemplate = data.site.siteMetadata.title || ''
  const image = data.allFile.edges[0].node.publicURL || ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitleTemplate}`}
      meta={[
        {
          property: `og:url`,
          content: `https://spino.dev`,
        },
        {
          name: `title`,
          property: `og:title`,
          content: `${title} | ${metaTitleTemplate}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `image`,
          propety: `og:image`,
          content: image,
        },
        {
          name: 'description',
          property: `og:description`,
          content: metaDescription,
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo