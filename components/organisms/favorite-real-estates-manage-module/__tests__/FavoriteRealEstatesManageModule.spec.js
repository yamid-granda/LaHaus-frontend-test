import { mount } from '@vue/test-utils'
import { fetchApiResponseToWrapper } from '@/unitTestUtils/fetch'
import component from '../FavoriteRealEstatesManageModule.vue'
import {
  makeApiFavoriteRealEstates,
  makeCollections,
  makeComponentCollections,
} from '../__mocks__/factory'

const collectionSelector = '[test-id="real-estate-collection"]'
const previewSelector = '[test-id="real-estate-preview"]'
const remainingSelector = `${collectionSelector} [test-id="remaining"]`
const previewActionSelector = '[test-id="preview-action"]'

let wrapper

beforeEach(() => {
  wrapper = mount(component)
})

afterEach(() => {
  wrapper.destroy()
})

describe('base data', () => {
  it('exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('collections starts as empty array', () => {
    expect(wrapper.vm.collections).toEqual([])
  })

  it('has create new list action', () => {
    const createNewElement = wrapper.findAll(previewActionSelector)
    expect(createNewElement.length).toBe(1)
    expect(createNewElement.at(0).text().match(/Create a new list/)).toBeTruthy()
  })
})

// todo: create a loop to check all this api response possibilities

describe('api response 1 collection 1 real estate', () => {
  const collections = makeCollections([{ realEstatesQuantity: 1 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 1 collection 1 preview', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(1)
    expect(wrapper.findAll(previewSelector).length).toBe(1)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })

})

describe('api response 1 collection 2 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 2 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 1 collection 2 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(1)
    expect(wrapper.findAll(previewSelector).length).toBe(2)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 1 collection 3 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 3 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 1 collection 3 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(1)
    expect(wrapper.findAll(previewSelector).length).toBe(3)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 1 collection 4 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 4 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 1 collection 4 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(1)
    expect(wrapper.findAll(previewSelector).length).toBe(3)
    expect(wrapper.findAll(remainingSelector).at(0).text()).toBe('+2')
  })
})

describe('api response 1 collection 15 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 15 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 1 collection 15 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(1)
    expect(wrapper.findAll(previewSelector).length).toBe(3)
    expect(wrapper.findAll(remainingSelector).at(0).text()).toBe('+13')
  })
})

describe('api response 2 collections, both with 1 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 1 }, { realEstatesQuantity: 1 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, both with 1 preview', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(2)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 2 collections, first with 1 real estate, second with 2 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 1 }, { realEstatesQuantity: 2 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, first with 1 preview, second with 2 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(3)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 2 collections, first with 2 real estates, second with 1 real estate', () => {
  const collections = makeCollections([{ realEstatesQuantity: 2 }, { realEstatesQuantity: 1 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, first with 2 previews, second with 1 preview', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(3)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 2 collections, both with 2 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 2 }, { realEstatesQuantity: 2 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, both with 2 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(4)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 2 collections, first with 1 real estates, second with 3 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 1 }, { realEstatesQuantity: 3 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, first with 1 previews, second with 3 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(4)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 2 collections, first with 3 real estates, second with 2 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 3 }, { realEstatesQuantity: 2 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, first with 3 previews, second with 2 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(5)
    expect(wrapper.findAll(remainingSelector).length).toBe(0)
  })
})

describe('api response 2 collections, first with 9 real estates, second with 3 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 9 }, { realEstatesQuantity: 3 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, firt with 3 previews remaining 7, second with 3 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(6)
    expect(wrapper.findAll(remainingSelector).at(0).text()).toBe('+7')
  })
})

describe('api response 2 collections, first with 11 real estates, second with 5 real estates', () => {
  const collections = makeCollections([{ realEstatesQuantity: 11 }, { realEstatesQuantity: 5 }])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, firt with 11 previews remaining 9, second with 5 previews remaining 3', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(2)
    expect(wrapper.findAll(previewSelector).length).toBe(6)
    expect(wrapper.findAll(remainingSelector).at(0).text()).toBe('+9')
    expect(wrapper.findAll(remainingSelector).at(1).text()).toBe('+3')
  })
})

describe('api response 3 collections, 1 with 1 real estate, 2 with 2 real estates, 3 with 7 real estates', () => {
  const collections = makeCollections([
    { realEstatesQuantity: 1 }, { realEstatesQuantity: 2 }, { realEstatesQuantity: 7 }
  ])
  const apiResponse = makeApiFavoriteRealEstates({ collections })
  beforeEach(async () => {
    wrapper = await fetchApiResponseToWrapper({ apiResponse, component })
  })

  it('map collections', async () => {
    const componentCollections = makeComponentCollections({ collections })
    expect(wrapper.vm.collections).toEqual(componentCollections)
  })

  it('has 2 collections, both with 1 previews', async () => {
    expect(wrapper.findAll(collectionSelector).length).toBe(3)
    expect(wrapper.findAll(previewSelector).length).toBe(6)
    expect(wrapper.findAll(remainingSelector).at(0).text()).toBe('+5')
  })
})