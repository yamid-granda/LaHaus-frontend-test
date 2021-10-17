<template>
  <div class="lh-real-estate-preview">
    <img class="lh-real-estate-preview__image" :src="image" :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
  },
}
</script>

<style>
.lh-real-estate-preview {
  @apply rounded-xl w-full overflow-hidden;
}

.lh-real-estate-preview__image {
  @apply object-cover w-full h-full;
}
</style>
