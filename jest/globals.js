import { config } from '@vue/test-utils'

config.mocks.$tc = key => key
config.mocks.$t = key => key

global.defaultTranslations = {}