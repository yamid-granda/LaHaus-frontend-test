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

export default {
  components: { AppContainer, Navbar },
  data() {
    return {
      links: [
        { text: 'Cundinamarca', href: '/cundinamarca' },
        { text: 'Antioquia', href: '/antioquia' },
        { text: 'Recursos', href: '/recursos' },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
