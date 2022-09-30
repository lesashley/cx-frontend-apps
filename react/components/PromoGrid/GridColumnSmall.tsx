import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import GridColumnRectangle from './GridColumnRectangle';

import GridColumnSquare from './GridColumnSquare';

import './styles.css';

const GridColumnSmall = ({...props}) => {
  const {
    mobileImageOne,
    desktopImageOne,
    titleOne,
    ctaOne,
    hrefOne,
    mobileImageTwo,
    desktopImageTwo,
    titleTwo,
    descriptionTwo,
    ctaTwo,
    hrefTwo
  } = props.columnData
  const { position } = props
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
    <div className={handles['promo-grid__small-column']}>
      {(position === 1) ?
        <>
          <GridColumnSquare
            mobileImage = {mobileImageOne}
            desktopImage = {desktopImageOne}
            title = {titleOne}
            cta = {ctaOne}
            href = {hrefOne}
          />
          <GridColumnRectangle
            mobileImage = {mobileImageTwo}
            desktopImage = {desktopImageTwo}
            title = {titleTwo}
            description = {descriptionTwo}
            cta = {ctaTwo}
            href = {hrefTwo}
          />
        </>
      :
        <>
          <GridColumnRectangle
            mobileImage = {mobileImageTwo}
            desktopImage = {desktopImageTwo}
            title = {titleTwo}
            description = {descriptionTwo}
            cta = {ctaTwo}
            href = {hrefTwo}
          />
          <GridColumnSquare
            mobileImage = {mobileImageOne}
            desktopImage = {desktopImageOne}
            title = {titleOne}
            cta = {ctaOne}
            href = {hrefOne}
          />
        </>
      }
    </div>
  )
}

export default GridColumnSmall
