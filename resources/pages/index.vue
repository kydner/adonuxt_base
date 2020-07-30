<template>
  <div>
    <section class="container">
    <img src="/img/logo.png" alt="Adonuxt logo"/>
    <h1>Universal Vue.js Applications Framework</h1>
    <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
    <b-button variant="primary">test</b-button>
  </section>
  </div>
</template>

<script>
  export default {
    name: 'page-index'
  }
</script>

<style scoped>
  h1 {
    margin: 50px 0;
  }
</style>
