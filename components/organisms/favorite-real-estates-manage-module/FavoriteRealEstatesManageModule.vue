<template>
  <div class="lh-favorite-real-estates-manage-module">
    <RealEstateCollections :collections="collections">
      <template #after-last-collection>
        <div class="lh-favorite-real-estates-manage-module__new">
          <PreviewAction icon="+" message="Crear una nueva lista" />
        </div>
      </template>
    </RealEstateCollections>
  </div>
</template>

<script>
import { getFavoriteRealEstateCollections } from '@/utils'
import { RealEstateCollections, PreviewAction } from '@/components'

export default {
  components: { RealEstateCollections, PreviewAction },
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
