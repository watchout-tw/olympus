<script>
export default {
  methods: {
    canvasIsLarger() {
      return this.canvas.width >= this.mainVisual.width && this.canvas.height >= this.mainVisual.height
    }
  }
}
</script>
