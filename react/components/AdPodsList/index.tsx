import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'

import { AD_PODS_LIST_SCHEMA } from './modules/schema'
import  { getAdPodsAsJSXList, getAdPodsAsJSXMobileList } from './modules/adPodsAsList'

import type { AdPodsSchema } from './AdPodsTypes'

import './styles.css'

export interface AdPodsListProps {
  adPods: AdPodsSchema
}

const AdPodsList = ({
  adPods,
  children
}: PropsWithChildren<AdPodsListProps> ) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []

  const adPodsContent = getAdPodsAsJSXList(adPods)
  const adPodsMobileContent = getAdPodsAsJSXMobileList(adPods)

  const newListContextValue = list.concat(adPodsContent);

  return <ListContextProvider list={newListContextValue}>
    {isMobile ? <AdPodsMobile adPodsGroup={adPodsMobileContent}/> : children}
  </ListContextProvider>
}

const AdPodsMobile = ({adPodsGroup}:any) => {
  const CSS_HANDLES = ['adpods__container']
  const handles = useCssHandles(CSS_HANDLES);
  return (
    <div className={handles.adpods__container}>
      {adPodsGroup}
    </div>
  )
}

AdPodsList.schema = AD_PODS_LIST_SCHEMA;

export default AdPodsList
