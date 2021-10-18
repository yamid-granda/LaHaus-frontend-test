<template>
  <div class="lh-favorite-real-estates-manage-module">
    <RealEstateCollections :collections="collections" />
  </div>
</template>

<script>
import { getFavoriteRealEstateCollections } from '@/utils'
import { RealEstateCollections } from '@/components'

export default {
  components: { RealEstateCollections },
  async fetch() {
    this.collections = await getFavoriteRealEstateCollections()
  },
  data() {
    return {
      collections: [],
    }
  },
}
</script>

<style lang="scss"></style>
