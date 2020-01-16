<template lang="pug">
  footer
    h2 NSR
    .links-list
      nuxt-link(to='/').link GitHub
      nuxt-link(to='/').link Twitter
</template>

<style lang="scss" scoped>
footer {
  background-color: black;
  color: white;
  padding: var(--page-padding);

  a {
    color: gray;
    // text-decoration: unset;

  }

  .links-list {
    .link {
      display: block;
    }
  }
}
</style>