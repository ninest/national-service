<template lang="pug">
  .parent
    TheNavbar
    main
      .desktop-sidebar
        TheSidebar
      .wrapper
        nuxt

    TheFooter
    //- TheFooter.footer
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheSidebar from '~/components/TheSidebar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  layout: 'another',
  components: {
    TheNavbar, TheSidebar, TheFooter
  },
}
</script>

<style lang="scss">
@import './assets/scss/globals.scss';
// needed to import all --CSS-variables

main {
  padding: var(--page-padding);

  display: grid;
  grid-template-columns: 15rem 1fr;

  grid-gap: 3rem;

  .desktop-sidebar {
    height: 100vh;
    position: sticky;
    top: 30px;
    overflow: scroll;

    grid-area: "sidebar"
  }

  .wrapper {
    // padding: 0 10%;
    grid-area: "wrapper";
  }

  @include phone-screen {
    grid-template-columns: 1fr;


    .desktop-sidebar {
      height: auto;
      position: unset;
      top: 0;

      // to put the "sidebar" as a navigation below the content
      // (for mobile)
      grid-row: 2;
    }
  }
}

.footer {
  padding: var(--page-padding);
}

</style>