import React, { useEffect } from 'react'
import promoGridSchema from './promo-grid-schema'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'
import GridColumnBig from './GridColumnBig'
import GridColumnSmall from './GridColumnSmall'
import './styles.css';

type Props = {
  mobileGridType: number
  desktopGridType: number
  mobileImageMain: string
  desktopImageMain: string
  titleMain: string
  descriptionMain: string
  ctaMain: string
  hrefMain: string
  mobileImageOne: string
  desktopImageOne: string
  titleOne: string
  ctaOne: string
  hrefOne: string
  mobileImageTwo: string
  desktopImageTwo: string
  titleTwo: string
  descriptionTwo: string
  ctaTwo: string
  hrefTwo: string
  mobileImageThree: string
  desktopImageThree: string
  titleThree: string
  ctaThree: string
  hrefThree: string
  mobileImageFour: string
  desktopImageFour: string
  titleFour: string
  descriptionFour: string
  ctaFour: string
  hrefFour: string
}

const PromoGrid = ({
  desktopGridType = 1,
  mobileGridType = 1,
  mobileImageMain,
  desktopImageMain,
  titleMain,
  descriptionMain,
  ctaMain,
  hrefMain,
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
  hrefTwo,
  mobileImageThree,
  desktopImageThree,
  titleThree,
  ctaThree,
  hrefThree,
  mobileImageFour,
  desktopImageFour,
  titleFour,
  descriptionFour,
  ctaFour,
  hrefFour
}: Props) => {
  const CSS_HANDLES = [
    'promo-grid',
    'promo-grid__desktop-order-1',
    'promo-grid__desktop-order-2',
    'promo-grid__desktop-order-3',
    'promo-grid__desktop-order-4',
    'promo-grid__desktop-order-5',
    'promo-grid__desktop-order-6',
    'promo-grid__mobile-order-1',
    'promo-grid__mobile-order-2',
    'promo-grid__mobile-order-3',
    'promo-grid__mobile-order-4',]
  const handles = useCssHandles(CSS_HANDLES);
  const { isMobile } = useDevice()

  console.log('Mobile grid type', mobileGridType, desktopGridType, isMobile)

  useEffect(() => {}, [mobileGridType, desktopGridType])

  return <div style={{display: 'block'}}>
    <div className= {`
      ${handles['promo-grid']}
      ${isMobile ?
        handles[`promo-grid__mobile-order-${mobileGridType}`] :
        handles[`promo-grid__desktop-order-${desktopGridType}`]
      }
    `}>
      <GridColumnBig
        columnData = {{
          mobileImageMain,
          desktopImageMain,
          titleMain,
          descriptionMain,
          ctaMain,
          hrefMain
        }}
        mobileGridType = {mobileGridType}
        desktopGridType = {desktopGridType}
      />
      <GridColumnSmall
        columnData = {{
          mobileImageOne: mobileImageOne,
          desktopImageOne: desktopImageOne,
          titleOne: titleOne,
          ctaOne: ctaOne,
          hrefOne: hrefOne,
          mobileImageTwo: mobileImageTwo,
          desktopImageTwo: desktopImageTwo,
          titleTwo: titleTwo,
          descriptionTwo: descriptionTwo,
          ctaTwo: ctaTwo,
          hrefTwo: hrefTwo
        }}
        mobileGridType = {mobileGridType}
        desktopGridType = {desktopGridType}
        position = {1}
      />
      <GridColumnSmall
        columnData = {{
          mobileImageOne: mobileImageThree,
          desktopImageOne: desktopImageThree,
          titleOne: titleThree,
          ctaOne: ctaThree,
          hrefOne: hrefThree,
          mobileImageTwo: mobileImageFour,
          desktopImageTwo: desktopImageFour,
          titleTwo: titleFour,
          descriptionTwo: descriptionFour,
          ctaTwo: ctaFour,
          hrefTwo: hrefFour
        }}
        mobileGridType = {mobileGridType}
        desktopGridType = {desktopGridType}
        position = {2}
      />
    </div>
  </div>
}

PromoGrid.schema = promoGridSchema

export default PromoGrid
