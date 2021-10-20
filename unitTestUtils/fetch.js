import { mount, shallowMount } from '@vue/test-utils'

export async function shallowMountWithFetch(component, options) {
  options.mountFunction = shallowMount
  return mountWithFetch(component, options)
}

export async function mountWithFetch(component, config) {
  let { mountFunction, fetchGlobal, fetchMocks, fetchContext, ...options } = config
  if (!mountFunction) mountFunction = mount
  const wrapper = mountFunction(component, options)
  const fetch = wrapper.vm.$options.fetch
  if (typeof fetch !== 'function') throw new TypeError('fetch should be a function')
  const thisArg = { ...wrapper.vm.$data, ...fetchMocks }
  const originalGlobal = {}
  for (const key of Object.keys(fetchGlobal)) {
    originalGlobal[key] = global[key]
    global[key] = fetchGlobal[key]
  }
  await fetch.apply(thisArg, [fetchContext])
  for (const key of Object.keys(fetchGlobal)) {
    global[key] = originalGlobal[key]
  }
  delete thisArg.$config
  wrapper.setData(thisArg)
  return wrapper
}

export async function fetchApiResponseToWrapper({ apiResponse, component }) {
  const fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(apiResponse) }))
  return mountWithFetch(component, { fetchGlobal: { fetch } })
}
