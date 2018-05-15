<template>
  <div>
    <div id="recaptcha" class="g-recaptcha"></div>
    <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
  </div>
</template>

<script>
import config from '../../config/config'

const SIZE = 'invisible'
export default {
  props: ['verified', 'token', 'callback'],
  mounted() {
    this.initReCaptcha()
  },
  methods: {
    initReCaptcha() {
      const self = this
      setTimeout(function() {
        // the `render` function has a delay...
        if(window.grecaptcha && typeof window.grecaptcha.render === 'function') {
          window.grecaptcha.render('recaptcha', {
            sitekey: config.reCaptchaSiteKey,
            size: SIZE,
            callback: self.verifiedCallback
          })
        } else {
          self.initReCaptcha()
        }
      }, 100)
    },
    verifiedCallback(token) {
      this.$emit('update:token', token)
      this.$emit('update:verified', true)
      if(typeof this.callback === 'function') this.callback()
    }
  }
}
</script>
