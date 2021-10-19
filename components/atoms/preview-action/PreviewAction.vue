<template>
  <div class="lh-preview-action">
    <div class="lh-preview-action__preview">{{ icon }}</div>
    <div class="lh-preview-action__info">
      <slot name="info">{{ message }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
}
</script>

<style lang="scss">
.lh-preview-action {
  @apply text-lh-sky-blue-500 cursor-pointer;
}

.lh-preview-action__preview {
  @apply bg-lh-blue-100 flex justify-center rounded-xl items-center h-49  text-6xl;
}

.lh-preview-action__info {
  @apply text-center pt-5 text-lg font-medium;
}
</style>
