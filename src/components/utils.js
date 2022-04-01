import * as React from 'react'
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

export default function MyImage({data}) {

  const images = withArtDirection(getImage(data.large.edges[0].node), [
    {
      media: '(max-width: 1024px)',
      image: getImage(data.small.edges[0].node),
    }
  ])

  return <GatsbyImage image={images} alt="RoleEver" layout='fullWidth' formats={["auto", "avif", "webp"]} quality='80' placeholder='tracedSVG' className="col-span-full mb-12 md:mb-32" />
}