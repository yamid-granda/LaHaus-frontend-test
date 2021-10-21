<template>
  <div class="flex justify-center">
    <div class="w-full lg:w-1/2">
      <RealEstateCollection :name="collection.name" :real-estates="collection.realEstates" />
    </div>
  </div>
</template>

<script>
import { RealEstateCollection } from '@/components'
import { getCollectionById } from '@/utils'

export default {
  components: { RealEstateCollection },
  async fetch() {
    this.collection = await getCollectionById(this.$route.params.collectionId)
  },
  data() {
    return {
      collection: {
        name: '',
        realEstates: [],
      },
    }
  },
}
</script>

<style lang="scss"></style>
