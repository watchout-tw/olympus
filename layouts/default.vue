<template>
<main>
  <nav-bar :channel="channel" />
  <nuxt/>
  <footer-standard />
  <modal-manager />
  <support-watchout v-if="showSupport" id="musou" />
</main>
</template>

<script>
import { env } from 'watchout-common-assets'
import { knowsWindowManagement } from 'watchout-common-functions/interfaces'
import NavBar from 'watchout-common-functions/components/NavBar'
import FooterStandard from 'watchout-common-functions/components/FooterStandard'
import ModalManager from 'watchout-common-functions/components/ModalManager'
import SupportWatchout from 'watchout-common-functions/components/SupportWatchout'

export default {
  mixins: [knowsWindowManagement],
  data() {
    return {
      channel: env.channels.musou
    }
  },
  components: {
    NavBar,
    FooterStandard,
    ModalManager,
    SupportWatchout
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import '~watchout-common-assets/styles/common';
</style>
