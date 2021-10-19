<template functional>
  <h1 class="lh-h1">
    <slot />
  </h1>
</template>

<style lang="scss">
.lh-h1 {
  @apply text-xl font-semibold
    lg:text-3xl;
}
</style>
