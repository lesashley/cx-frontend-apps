import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

interface LinkProps {
  url: string
  attributeNofollow: boolean
  attributeTitle?: string
  /**
   * These two properties need to both exist because
   * there was a mismatch in the API defined by this component,
   * which exposes a openNewTab prop, and the native link type
   * from vtex.native-types, which expects a newTab property
   * instead of openNewTab.
   */
  openNewTab?: boolean
  newTab?: boolean
}


type Props = {
  src: string
  title: string
  link: LinkProps
  description: string
  author: string
}

function AdPod({ src, title, link, description, author }: Props) {
  const CSS_HANDLES = ['adpods__item', 'adpods__item--title', 'adpods__item--image', 'adpods__item--link', 'adpods__item--description', 'adpods__item--author']
  const handles = useCssHandles(CSS_HANDLES);
  return (
    <div className={handles['adpods__item']}>
      <Link
        to={link.url}
        className={handles['adpods__item--link']}
      >
        <img className={handles['adpods__item--image']} src={src} alt={title} />
        <p className={handles['adpods__item--title']}>{title}</p>
        <p className={handles['adpods__item--description']}>{description}</p>
        <p className={handles['adpods__item--author']}>{author}</p>
      </Link>
    </div>
  )
}

AdPod.schema = {
  title: 'Ad Pod',
  type: 'object',
  properties: {
    src: {
      title: 'Imagen Ad Pod',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      },
      description: 'string',
      author: 'string'
    },
    title: {
      title: 'Titulo de Ad Pod',
      description: 'Título de departamento, categoría o colección al que va a apuntar',
      type: 'string'
    }
  }
}

export default AdPod
