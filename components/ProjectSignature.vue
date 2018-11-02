<template>
<div class="project-signature">
  <nuxt-link class="image-container a-block" :to="to">
    <img class="image" :src="image" />
  </nuxt-link>
  <nuxt-link class="title-container text-align-center a-block" :to="to"><span class="a-target">{{ project.title }}</span></nuxt-link>
</div>

</template>

<script>
export default {
  props: ['module', 'project'],
  computed: {
    to() {
      return { name: 'moduleSlug-projectSlug', params: { moduleSlug: this.module.id, projectSlug: this.project.id } }
    },
    image() {
      let image = typeof this.project.image === 'string' ? this.project.image : this.project.image.default
      return require('~/static/' + image)
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.project-signature {
  position: relative;
  > .image-container {
    width: 100%;
    @include shadow-lifted;
  }
  > .title-container {
    padding: 0.5rem 0;
  }
}
</style>
