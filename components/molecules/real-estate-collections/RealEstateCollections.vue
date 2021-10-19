<template>
  <div class="lh-real-estate-collections">
    <div class="lh-real-estate-collections__collections">
      <nuxt-link
        v-for="{ id, realEstates, name } in collections"
        :key="id"
        :to="`/${id}`"
        class="lh-real-estate-collections__collection"
      >
        <RealEstateCollection :name="name" :real-estates="realEstates"></RealEstateCollection>
      </nuxt-link>
      <slot name="after-last-collection" />
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

<style lang="scss">
.lh-real-estate-collections {
  @apply flex;
}

.lh-real-estate-collections__collections {
  @apply mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3;
}
</style>
