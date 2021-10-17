<template>
  <div class="lh-real-estate-collections">
    <div
      v-for="{ id, realEstates, name } in collections"
      :key="id"
      class="lh-real-estate-collections__collection"
    >
      <RealEstateCollection :name="name" :real-estates="realEstates"></RealEstateCollection>
    </div>
  </div>
</template>

<script>
import { RealEstateCollection } from '@/components'

export default {
  components: { RealEstateCollection },
  props: { collections: { type: Array, default: () => [] } },
}
</script>

<style lang="scss"></style>
