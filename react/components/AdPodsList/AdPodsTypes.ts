export type AdPodsSchema = Array<{
  image: string
  link?: Link
  title?: string
  description?: string
  author?: string
}>

interface Link {
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
