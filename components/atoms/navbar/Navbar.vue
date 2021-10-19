<template>
  <div
    :class="{
      'lh-navbar--open': isOpen,
    }"
    class="lh-navbar"
  >
    <div class="lh-navbar__actions">
      <div class="lh-navbar__toggler" @click="onTogglerClick">
        <HamburgerIcon />
      </div>
      <div class="lh-navbar__brand">
        <a href="https://www.lahaus.com/" target="_blank">
          <div class="lh-navbar__iso-type">
            <IsoTypeIcon />
          </div>
          <div class="lh-navbar__symbol-logo">
            <SymbolLogoIcon />
          </div>
        </a>
      </div>
    </div>

    <div class="lh-navbar__links">
      <nuxt-link v-for="{ href, text } in links" :key="href" :to="href" class="lh-navbar__link">
        {{ text }}
      </nuxt-link>
      <nuxt-link to="/mi-perfil" class="lh-navbar__link lh-navbar__profile-link">
        Mi Perfil
        <div class="lh-navbar__profile-chevron">
          <ChevronDownIcon />
        </div>
        <div v-if="hasNotifications" class="lh-navbar__profile-notification">
          <NotificationIcon />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import {
  HamburgerIcon,
  IsoTypeIcon,
  ChevronDownIcon,
  SymbolLogoIcon,
  NotificationIcon,
} from '@/icons'

export default {
  components: {
    HamburgerIcon,
    IsoTypeIcon,
    ChevronDownIcon,
    SymbolLogoIcon,
    NotificationIcon,
  },
  props: {
    links: { type: Array, default: () => [] },
    hasNotifications: { type: Boolean, default: false },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    onTogglerClick() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.lh-navbar {
  @apply h-15 
    border-b 
    border-gray-100 
    fixed left-0
    right-0 
    top-0 z-10 
    bg-white 
    px-6
    items-center 
    overflow-hidden 
    text-lh-jungle-green-900
    lg:px-18
    lg:flex;
}

.lh-navbar__actions {
  @apply h-15 flex items-center;
}

.lh-navbar__toggler {
  @apply cursor-pointer lg:hidden;
}

.lh-navbar__iso-type {
  @apply ml-3 lg:hidden;
}

.lh-navbar__symbol-logo {
  @apply hidden lg:block;
}

.lh-navbar__links {
  @apply mt-4
    lg:flex-grow
    lg:mt-0
    lg:flex
    lg:justify-end
    lg:-mx-5;
}

.lh-navbar__link {
  @apply py-3 block
    lg:mx-5;
}

.lh-navbar__profile-link {
  @apply font-medium flex items-center;
}

.lh-navbar__profile-chevron {
  @apply ml-2;
}

.lh-navbar__profile-notification {
  @apply lg:relative lg:-left-1 lg:-top-2
  absolute top-3 left-12;
}

.lh-navbar--open {
  @apply h-auto;
}
</style>
