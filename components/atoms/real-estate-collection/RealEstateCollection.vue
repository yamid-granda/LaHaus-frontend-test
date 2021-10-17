<template>
  <div
    :class="{
      'lh-real-estate-collection--single': isSinglePreview,
      'lh-real-estate-collection--double': isDoublePreview,
      'lh-real-estate-collection--many': hasManyRealEstates,
    }"
    class="lh-real-estate-collection"
  >
    <div class="lh-real-estate-collection__previews">
      <div
        v-for="preview in realEstatePreviews"
        :key="preview.id"
        class="lh-real-estate-collection__preview"
      >
        <RealEstatePreview :name="preview.name" :image="preview.imageSrc" />
      </div>
    </div>
    <div class="lh-real-estate-collection__name">{{ name }}</div>
    <div class="lh-real-estate-collection__count">{{ quantity }} {{ 'propiedades guardadas' }}</div>
    <div v-if="hasManyRealEstates" class="lh-real-estate-collection__remaining">
      +{{ remainingQuantity }}
    </div>
  </div>
</template>

<script>
import RealEstatePreview from '@/components/atoms/real-estate-preview/RealEstatePreview.vue'

export default {
  components: {
    RealEstatePreview,
  },
  props: {
    realEstates: { type: Array, default: () => [] },
    name: { type: String, required: true },
  },
  computed: {
    previewsQuantity() {
      return this.realEstatePreviews.length
    },
    realEstatePreviews() {
      return this.realEstates.slice(0, 3).reverse()
    },
    isSinglePreview() {
      return this.previewsQuantity === 1
    },
    isDoublePreview() {
      return this.previewsQuantity === 2
    },
    hasManyRealEstates() {
      return this.realEstates.length > 3
    },
    remainingQuantity() {
      return this.quantity - 2
    },
    quantity() {
      return this.realEstates.length
    },
  },
}
</script>

<style lang="scss">
.lh-real-estate-collection {
  @apply relative w-73 pb-8 cursor-pointer;

  .lh-real-estate-preview {
    @apply border border-white h-full;
  }
}

.lh-real-estate-collection__previews {
  @apply relative h-49;
}

.lh-real-estate-collection__preview {
  @apply absolute h-full -m-px;
}

.lh-real-estate-collection__preview {
  &:last-child {
    @apply w-37;
  }
}

.lh-real-estate-collection__preview {
  &:nth-child(2) {
    @apply left-33 w-25;
  }
}

.lh-real-estate-collection__preview {
  &:first-child {
    @apply right-0 w-19;
  }
}

.lh-real-estate-collection__name {
  @apply font-semibold text-lg text-lh-jungle-green-900 mt-4;
}

.lh-real-estate-collection__count {
  @apply text-sm text-lh-green-gray-500 mt-1;
}

.lh-real-estate-collection__remaining {
  @apply text-white absolute top-21 right-0 font-semibold text-lg leading-6 w-15 text-center;
}

.lh-real-estate-collection--single {
  .lh-real-estate-collection__preview {
    @apply w-full m-0;
  }
  .lh-real-estate-preview {
    @apply border-0;
  }
}

.lh-real-estate-collection--double {
  .lh-real-estate-collection__preview {
    &:first-child {
      @apply w-39;
    }
    &:last-child {
      @apply w-37 left-0 right-auto;
    }
  }
}

.lh-real-estate-collection--many {
  .lh-real-estate-collection__preview {
    &:first-child {
      &::after {
        @apply bg-lh-jungle-green-900 block inset-0 absolute opacity-70 rounded-xl;
        content: '';
      }
    }
  }
}
</style>
