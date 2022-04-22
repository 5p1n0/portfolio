import React from "react"
import { PropTypes } from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, lang, meta, image }) => {

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
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const metaTitleTemplate = data.site.siteMetadata.title || ''
  const metaImage = image || ''
  const metaImageSrc = `${data.site.siteMetadata.url}${metaImage.src}` || ''
  console.log(metaImage);

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
          name: 'description',
          property: `og:description`,
          content: metaDescription,
        },
        {
          propety: `og:image`,
          content: metaImageSrc,
        },
        {
          propety: `og:image:width`,
          content: metaImageSrc.width,
        },
        {
          propety: `og:image:height`,
          content: metaImageSrc.height,
        },
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
  image: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo