<script>
import parseColor from 'parse-color'

export default {
  methods: {
    getStyles(name, data = undefined) {
      var styles = {}
      const global = this.sequence.default ? this.sequence.default.styles ? this.sequence.default.styles[name] : undefined : undefined
      const scene = this.activeScene.default ? this.activeScene.default.styles ? this.activeScene.default.styles[name] : undefined : undefined
      const local = data ? data.styles : undefined
      const attributes = ['text', 'border', 'background']
      for(let attribute of attributes) {
        styles[attribute] = (local && local[attribute]) || (scene && scene[attribute]) || (global && global[attribute]) || undefined
      }

      if(styles.text && typeof styles.text === 'object') {
        if(styles.text.align) {
          styles.textAlign = styles.text.align
        }
        if(styles.text.size) {
          styles.fontSize = styles.text.size
        }
        if(styles.text.color) {
          styles.color = styles.text.color
        }
        if(styles.text.leading) {
          styles.lineHeight = styles.text.leading
        }
      }
      if(styles.border && typeof styles.border === 'object') {
        if(styles.border.width) {
          styles.borderWidth = styles.border.width
        }
        if(styles.border.color) {
          styles.borderColor = styles.border.color
        }
      }
      if(styles.background && typeof styles.background === 'object') {
        var color = parseColor(styles.background.color)
        if(styles.background.opacity) {
          color = parseColor('rgba(' + color.rgb.slice().concat(styles.background.opacity).join(',') + ')')
        }
        styles.backgroundColor = 'rgba(' + color.rgba.join(',') + ')'
      }
      return styles
    }
  }
}
</script>