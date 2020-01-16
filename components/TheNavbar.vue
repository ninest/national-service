<template lang="pug">
  nav
    .logo 
      span.desktop NS Repository
      //- span.mobile NS Repo
    .right 
      //- button
      //-   img(src="https://img.icons8.com/material-rounded/24/000000/menu.png")
</template>

<style lang="scss" scoped>
nav {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

  padding: var(--page-dense-padding);
  
  display: flex;
  justify-content: space-between;

  .logo {
    font-weight: 600;
    font-size: 1.1em;
  }

  .right {
    button { // hamburger menu button
      border: none;

      // only show on mobile
      display: none;
      @include phone-screen {
        display: block
      }

    }
  }
}

// if on mobile, navbar should not stick
// on desktop, it'll stick, but hide the buttons on the right
@include phone-screen {
  nav {
    position: unset;
  }
}
</style>