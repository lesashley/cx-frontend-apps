import React from 'react';
import { useCssHandles } from 'vtex.css-handles'
import './styles.css';

type GridColumn = {
  mobileImage: string
  desktopImage: string
  title: string
  description: string
  cta: string
  href: string
}

const GridColumnRectangle = ({
  mobileImage,
  desktopImage,
  title,
  description,
  cta,
  href
}: GridColumn) => {
  const CSS_HANDLES = [
    'promo-grid__small-column',
    'promo-grid__small-column--item',
    'promo-grid__small-column--image',
    'promo-grid__small-column--text',
    'promo-grid__small-column--text-container',
    'promo-grid__small-column--title',
    'promo-grid__small-column--description',
    'promo-grid__small-column--call-to-action'
  ]
  const handles = useCssHandles(CSS_HANDLES);
  return (
    <div className={handles['promo-grid__small-column--item']} >
      <picture className={handles['promo-grid__small-column--image']}>
        <source srcSet={desktopImage} media='(min-width: 768px)' />
        <img src={mobileImage} alt={title} />
      </picture>
      <div className={handles['promo-grid__small-column--text']}>
        <h2 className={handles['promo-grid__small-column--title']}>
          {title}
        </h2>
        <p className={handles['promo-grid__small-column--description']}>
          {description}
        </p>
        <a
          className={handles['promo-grid__small-column--call-to-action']}
          href={href}>
            {cta}
        </a>
      </div>
    </div>
  )
}

export default GridColumnRectangle
