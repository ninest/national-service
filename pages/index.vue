<template lang="pug">
  div
    h1 {{ title }}

    DynamicMarkdown(:render-func="renderFunc" :static-render-funcs="staticRenderFuncs")
    
</template>

<script>
import DynamicMarkdown from "~/components/DynamicMarkdown.vue"

export default {
  components: {
    DynamicMarkdown
  },
  data: function() {
    return {
      // show back button if NOT home
      showBackButton: this.$route.path === "/" ? false : true
    }
  },
  async asyncData() {
    const fileContent = await import(`~/contents/home.md`)
    const title = fileContent.attributes.title
    const renderFunc = `(${fileContent.vue.render})`
    const staticRenderFuncs =`[${fileContent.vue.staticRenderFns}]`

    return {
      title,
      renderFunc,
      staticRenderFuncs
    }
  }
}
</script>
