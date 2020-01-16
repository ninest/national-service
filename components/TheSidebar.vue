<template lang="pug">
  .sidebar
    nuxt-link(to="/" :class="{'home-active': onHomePage()}").home-link
      span.emoji &#x1F3E0;
      span Home

    nuxt-link(v-for="tag in this.tagsData.tags" :key="tag.name" :to="'/' + tag.name").each-link
      .cap(v-if="tag.capitalize === true") 
        span(v-html="tag.emoji").emoji
        span {{tag.name}}
      div(v-else) 
        span(v-html="tag.emoji").emoji
        span {{tag.name}}

</template>

<script>
import tags from './../contents/tags.yml';

export default {
  data: function() {
    return {
      tagsData: tags
    }
  },
  methods: {
    onHomePage() {
      return true ? this.$route.path === "/" : false;
    }
  }
}
</script>

<style lang="scss" scoped>

@mixin link {
  display: block;
  text-decoration: unset;
  color: unset;

  padding: var(--dense-padding);
  border-radius: calc(0.3 * var(--dense-padding));
  background-color: rgba(0,0,0, 0.05);

  box-shadow: 
  0 2px 4px 0 rgba(0,0,0,0.08),
  0 1px 2px 0 rgba(0,0,0,0.06);

  text-transform: capitalize;

  margin-bottom: var(--dense-padding);
}
@mixin link-active {
  color: white;
  font-weight: 600;
  background-color: darkolivegreen;
}

.sidebar {


  .each-link {
    @include link;
    // to capitalize BMT
    .cap { text-transform: uppercase }

    &.nuxt-link-active {
      @include link-active;
    }
  }

  .home-link {
    @include link;

    &.home-active {
      @include link-active;
    }
  }

  .emoji {
    padding-right: 10px;
  }
}

</style>