<template lang="pug">
  div
    //- nuxt-link.back-button(:to="'/' + tag") 
    //-   div < Back
    BackButton(:previousPageLink="'/' + tag" :previousPageTitle="tag")

    h1 {{ title }}

    .link-button-list
      LinkButton(
        v-for="link in links" v-bind:key="link.title"
        :title="link.title" :link="link.url"
        :rgb="link.rgb"
        :externalLink="true"
      )
      //- DynamicMarkdown(
      //-   :render-func="renderFunc"
      //-   :static-render-funcs="staticRenderFuncs"
      //- ).content
</template>

<script>
import DynamicMarkdown from "~/components/DynamicMarkdown.vue"
import BackButton from "~/components/BackButton.vue"
import LinkButton from "~/components/LinkButton.vue"

export default {
  components: {
    DynamicMarkdown,
    BackButton,
    LinkButton
  },
  data: function() {
    return {
      tag: this.$route.params.tag,
      slug: this.$route.params.slug
    }
  },
  async asyncData({params, app}) {
    const pageData = await import(`~/contents/pages/${params.slug}.yml`)
    console.log(pageData)

    return {
      title: pageData.title,
      links: pageData.links
    }
    // const attr = fileContent.attributes
    // console.log(fileContent.vue)
    // return {
    //   name: params.slug,
    //   title: attr.title,
    //   renderFunc: `(${fileContent.vue.render})`,
    //   staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
    //   comp: fileContent.vue.component
    // }
  }
}
</script>

<style lang="scss" scoped>
.link-button-list {
  * {
    margin-bottom: var(--main-padding);
  }
}
</style>