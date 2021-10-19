<template>
  <div class="lh-favorite-real-estates-page">
    <div class="lh-favorite-real-estates-page__h1">
      <H1>{{ $t('Favorites list') }}</H1>
    </div>
    <FavoriteRealEstatesManageModule />
  </div>
</template>

<script>
import { FavoriteRealEstatesManageModule, H1 } from '@/components'

export default {
  components: {
    H1,
    FavoriteRealEstatesManageModule,
  },
}
</script>

<style lang="scss">
.lh-favorite-real-estates-page__h1 {
  @apply text-center mb-14 text-lh-jungle-green-900
    lg:mt-7;
}
</style>
