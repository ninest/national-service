<template lang="pug">
  .link-button

    nuxt-link(v-if="!externalLink" :to="link")
      button(
        v-bind:style=`{
          color: "rgb(" + rgb + ")",
          backgroundColor: "rgba(" + rgb + ",0.22)",
        }`
        v-bind:class="{ fullwidth: fullWidth }"
      ) {{ title }}
    
    a(:href="link" target="_blank" v-else)
      button(
        v-bind:style=`{
          color: "rgb(" + rgb + ")",
          backgroundColor: "rgba(" + rgb + ",0.22)",
        }`
        v-bind:class="{ fullwidth: fullWidth }"
      ) {{ title }}
</template>

<script>
export default {
  props: {
    link: String,
    title: String,
    rgb: String,
    fullWidth: Boolean,
    externalLink: Boolean,
  },
  // pressing back will take you to previous link
  created() {
    console.log(this.rgb)
  }
}
</script>

<style lang="scss" scoped>
.fullwidth {
  width: 100%;
}
</style>