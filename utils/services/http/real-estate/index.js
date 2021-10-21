import { httpGet } from '@/utils'

function mapRealEstate(realEstate) {
  const { gallery_urls: galleryUrls, name } = realEstate
  const imageSrc = galleryUrls[0] || null
  return {
    // todo: map other real estate data
    // ...realEstate,
    name,
    imageSrc,
  }
}

function parseRealEstatesDataToDictionary(realEstatesData) {
  return realEstatesData.reduce((dictionary, apiData) => {
    const { id, attributes } = apiData
    dictionary[id] = attributes
    return dictionary
  }, {})
}

function parseRealEstateCollectionsDataToCollections({ collectionsData, realEstatesDictionary }) {
  return collectionsData.map(({ id, attributes }) => {
    const { name, real_estate_ids: realEstateIds } = attributes
    const realEstates = realEstateIds.map(realEstateId =>
      mapRealEstate(realEstatesDictionary[realEstateId]),
    )
    return {
      id,
      name,
      realEstates,
    }
  })
}

export async function getFavoriteRealEstateCollections() {
  const response = await httpGet({ url: 'real-estates' })
  if (!response) return null
  const { data: collectionsData, included: realEstatesData } = response
  const realEstatesDictionary = parseRealEstatesDataToDictionary(realEstatesData)
  return parseRealEstateCollectionsDataToCollections({ collectionsData, realEstatesDictionary })
}

export async function getCollectionById(id) {
  const collections = await getFavoriteRealEstateCollections()
  return collections.find(({ id: collectionId }) => id === collectionId) || null
}
