<template>
<div class="audio-library">
  <audio v-for="audio of audios" :id="getElementID(audio.id)" :src="audio.url"></audio>
</div>
</template>

<script>
import { knowsAudio } from 'watchout-common-functions/interfaces'

export default {
  mixins: [knowsAudio],
  props: ['audios', 'playingID', 'stopped'],
  watch: {
    playingID(nextAudioID, oldAudioID) {
      const oldElement = this.getElement(oldAudioID)
      if(oldElement) {
        this.fadeOutAudio(oldElement, () => {
          this.$emit('update:stopped', true)
        })
      } else {
        const nextElement = this.getElement(nextAudioID)
        if(nextElement) this.playAudio(nextElement)
      }
    }
  },
  methods: {
    getElementID(audioID) {
      return 'audio-player-' + audioID
    },
    getElement(audioID) {
      const elementID = this.getElementID(audioID)
      return document.getElementById(elementID)
    }
  }
}
</script>
