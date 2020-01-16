<template lang="pug">
  .link-button-list
    div(
      v-for="item in list" v-bind:key="item[0]"
    )
      div item[0]
      div item[1]
      div item[3]
</template>

<script>
import LinkButton from '~/components/LinkButton.vue'

export default {
  components: {
    LinkButton
  },
  props: {
    list: Array,
  },
}
</script>

<style lang="scss" scoped>
</style>