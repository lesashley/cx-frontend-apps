import React from 'react'
import { AdPodsSchema } from '../AdPodsTypes';
import AdPod from '../AdPod';

export const getAdPodsAsJSXList = (
  adPods: AdPodsSchema
) => {
  return adPods.map((adPod:any, index) => {
      console.log(adPod, index)
      return <AdPod
        src={adPod.image}
        title={adPod.title ? adPod.title : "Title"}
        link={adPod.link ? adPod.link : {
          url: "",
          attributeNofollow: false,
          attributeTitle: "",
          openNewTab: false,
          newTab: false}}
      />
    }
  )
}

export const getAdPodsAsJSXMobileList = (
  adPods: AdPodsSchema
) => {
  return adPods.map((adPod, index) => {
      console.log(adPod, index)
      return (
        <div>
          <AdPod
            src={adPod.image}
            title={adPod.title ? adPod.title : "Title"}
            link={adPod.link ? adPod.link : {
              url: "",
              attributeNofollow: false,
              attributeTitle: "",
              openNewTab: false,
              newTab: false}}
          />
        </div>
      )
    }
  )
}
