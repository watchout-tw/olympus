<template>
<div class="page project read">
  <div class="tcl-container margin-top-bottom-8">
    <div class="tcl-panel tcl-left-right-margin with-top-bottom-margin">
      A reader lives a thousand lives before he dies. The man who never reads lives only one.
    </div>
  </div>
</div>
</template>

<script>
import { knowsWatchout } from 'watchout-common-functions/interfaces'
import defaultCoverImage from 'watchout-common-assets/images/default-cover-images/musou-2-1.jpg'
import * as info from '~/data/info'

export default {
  nuxtI18n: false,
  mixins: [knowsWatchout],
  head() {
    const pageTitle = '閱讀' + info.SEPARATOR + this.$t(info.SITE_TITLE)
    const pageDescription = info.SITE_DESCRIPTION
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, defaultCoverImage)
    }
  }
}
</script>
