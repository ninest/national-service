<template lang="pug">
  div
    BackButton(previousPageLink="/" previousPageTitle="Home").back-button
    h1 {{ tag }}

    .page-list
      nuxt-link(
        v-for="(p, key) in allPages" v-bind:key="p.title" 
        :to="'/' + $route.params.tag + '/' + slugs[key]"
        v-bind:style=`{ 
          border: '3px solid ' + p.color,
          color: p.color
        }`
      )
        .title {{p.title}}
      

</template>

<script>
const path = require('path')
const fs = require('fs')

import BackButton from "~/components/BackButton.vue"

export default {
  components: {
    BackButton
  },
  // to fix: casse sensitive routing
  data: function() {
    return {
      // show back button if NOT home
      showBackButton: this.$route.path === "/" ? false : true,
      tag: this.$route.params.tag === "bmt"? "BMT" : this.$route.params.tag,
      // hardcode to capitalize bmt
    }
  },
  async asyncData({params, app}) {
    async function asyncImport (page) {
      const pageData = import(`~/contents/pages/${page}.yml`)
      return pageData
    }

    const published = await import('~/contents/published.yml')
    let pages = published.published

    console.log(pages)

    return Promise.all(pages.map(eachPage => asyncImport(eachPage)))
      .then((res) => {
        
        return {
          // filtering out all pages by tag params.tag
          allPages: res.filter(page => page.tags.includes(params.tag)),

          slugs: res.filter(page => page.tags.includes(params.tag))
                    .map(page => page.title.replace(" ", "-").toLowerCase())
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  display: none; // just for this page, hide back button in desktop
  // because the sidebar is clearly visible
  @include phone-screen {display: block;}
}

.page-list {
  a {
    color: unset;
    text-decoration: unset;

    display: block;

    font-weight: 600;

    // background-color: rgba(0,0,0, 0.2);
    
    padding: var(--input-padding);
    border-radius: var(--input-padding);

    margin-bottom: var(--dense-padding);
  }
}
</style>