import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css';

const GridColumnBig = ({...props}) => {
  const CSS_HANDLES = [
    'promo-grid__big-column',
    'promo-grid__big-column--image',
    'promo-grid__big-column--text',
    'promo-grid__big-column--text-container',
    'promo-grid__big-column--title',
    'promo-grid__big-column--description',
    'promo-grid__big-column--call-to-action'
  ]
  const handles = useCssHandles(CSS_HANDLES);

  const {
    mobileImageMain,
    desktopImageMain,
    titleMain,
    descriptionMain,
    ctaMain,
    hrefMain
  } = props.columnData

  return (
    <div className={handles['promo-grid__big-column']}>
      <picture className={handles['promo-grid__big-column--image']}>
        <source srcSet={desktopImageMain} media='(min-width: 768px)' />
        <img src={mobileImageMain} alt={titleMain} />
      </picture>
      <div className={handles['promo-grid__big-column--text']}>
        <div className={handles['promo-grid__big-column--text-container']}>
          <h2 className={handles['promo-grid__big-column--title']}>{titleMain}</h2>
          <p className={handles['promo-grid__big-column--description']}>{descriptionMain}</p>
        </div>
        <a className={handles['promo-grid__big-column--call-to-action']} href={hrefMain}>{ctaMain}</a>
      </div>
    </div>
  )
}

export default GridColumnBig
