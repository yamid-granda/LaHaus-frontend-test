<template>
  <div>
    <Navbar :links="links" has-notifications></Navbar>
    <AppContainer>
      <Nuxt />
    </AppContainer>
  </div>
</template>

<script>
import { AppContainer, Navbar } from '@/components'
import translateMixin from '@/mixins/translate'

export default {
  mixins: [translateMixin],
  components: { AppContainer, Navbar },
  data() {
    return {
      links: [
        { text: 'Cundinamarca', href: '/cundinamarca' },
        { text: 'Antioquia', href: '/antioquia' },
        { text: this.$translate('Resources'), href: '/recursos' },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
