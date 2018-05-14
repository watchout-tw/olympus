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
  mounted() {
    this.initReCaptcha()
  },
  methods: {
    initReCaptcha() {
      const self = this
      setTimeout(function() {
        if(window.grecaptcha) {
          window.grecaptcha.render('recaptcha', {
            sitekey: config.reCaptchaSiteKey,
            size: SIZE,
            callback: self.callback //  TODO
          })
          window.grecaptcha.execute()
        } else {
          self.initReCaptcha()
        }
      }, 100)
    }
  }
}
</script>
