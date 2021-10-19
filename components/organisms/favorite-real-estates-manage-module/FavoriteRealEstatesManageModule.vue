<template>
  <div class="lh-favorite-real-estates-manage-module">
    <RealEstateCollections :collections="collections">
      <template #after-last-collection>
        <div class="lh-favorite-real-estates-manage-module__new">
          <PreviewAction icon="+" :message="$translate('Create a new list')" />
        </div>
      </template>
    </RealEstateCollections>
  </div>
</template>

<script>
import { getFavoriteRealEstateCollections } from '@/utils'
import { RealEstateCollections, PreviewAction } from '@/components'
import translateMixin from '@/mixins/translate'

export default {
  mixins: [translateMixin],
  components: { RealEstateCollections, PreviewAction },
  async fetch() {
    this.collections = await getFavoriteRealEstateCollections()
  },
  props: {
    $translations: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      collections: [],
    }
  },
}
</script>

<style lang="scss"></style>
