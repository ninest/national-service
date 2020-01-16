<template lang="pug">
  div
    nuxt-link(:to="previousPageLink").flex
      img(src="https://img.icons8.com/material-rounded/24/000000/chevron-left.png")
      span {{ previousPageTitle }}
</template>

<script>
export default {
  props: ['previousPageLink', 'previousPageTitle']
  // pressing back will take you to previous link
}
</script>

<style lang="scss" scoped>
div {
  a {
    text-decoration: unset;
    color: unset;
  }

  .flex {
    display: flex;
    align-items: center;

    img {
      height: 1em;
    }

    span {
      font-size: 0.9em;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
}
</style>