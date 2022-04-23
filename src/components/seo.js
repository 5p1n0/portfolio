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
          url
        }
      }

      allFile(filter: {name: {eq: "logo"}}) {
        edges {
          node {
            childImageSharp {
              resize(width: 1200) {
                src
                height
                width
              }
            }
          }
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const metaTitleTemplate = data.site.siteMetadata.title || ''
  const metaImage = data.allFile.edges[0].node.childImageSharp.resize || ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitleTemplate}`}
      meta={[
        {
          property: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `https://spino.dev`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: `${title} | ${metaTitleTemplate}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta property="image" content={`${data.site.siteMetadata.url}${metaImage.src}`} />
      <meta property="og:image" content={`${data.site.siteMetadata.url}${metaImage.src}`} />
    </Helmet>
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