export function makeApiRealEstate({ id }) {
  return {
    id: `${id}`,
    attributes: {
      slug: `slug-${id}`,
      name: `name ${id}`,
      gallery_urls: [`image-${id}.jpg`],
    },
  }
}

export function makeApiRealEstates({ realEstates = [] }) {
  return realEstates.map(({ id }) => makeApiRealEstate({ id }))
}

export function makeApiCollection({ id, realEstates = [] }) {
  const realEstateIds = realEstates.map(({ id: realEstateId }) => realEstateId)
  return {
    id: `${id}`,
    attributes: { name: `name ${id}`, real_estate_ids: realEstateIds },
  }
}

export function makeApiCollections({ collections = [] }) {
  return collections.map(collection => makeApiCollection(collection))
}

export function parseCollectionsToRealsEstatesDictionary(collections) {
  return collections.reduce((dictionary, { realEstates }) => {
    realEstates.forEach(({ id }) => (dictionary[id] = { id }))
    return dictionary
  }, {})
}

export function makeApiFavoriteRealEstates({ collections = [] }) {
  const data = makeApiCollections({ collections })
  const realEstatesDictionary = parseCollectionsToRealsEstatesDictionary(collections)
  const realEstates = Object.values(realEstatesDictionary).map(dictionary => dictionary)
  const included = makeApiRealEstates({ realEstates })
  return { data, included }
}

export function makeComponentCollections({ collections = [] }) {
  return collections.map(({ id, realEstates: collectionRealEstates = [] }) => {
    const realEstates = collectionRealEstates.map(({ id: realEstateId }) => ({
      name: `name ${realEstateId}`,
      imageSrc: `image-${realEstateId}.jpg`,
    }))
    return {
      id: `${id}`,
      name: `name ${id}`,
      realEstates,
    }
  })
}

export function makeCollectionRealEstates({ quantity }) {
  return Array(quantity)
    .fill()
    .map((item, index) => ({ id: index + 1 }))
}

export function makeCollections(collections = []) {
  return collections.map(({ realEstatesQuantity = [] }, index) => {
    const realEstates = makeCollectionRealEstates({ quantity: realEstatesQuantity })
    return {
      id: index + 1,
      realEstates,
    }
  })
}
