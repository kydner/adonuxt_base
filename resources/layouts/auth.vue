<template>
  <b-container fluid>
    <b-row align-v="center">
      <b-col cols="6" class="left-side px-4 py-3">
        <h2 style="color:#fefefe;">test 123</h2>
      </b-col>
      <b-col cols="6" class="right-side px-4 py-3">
        <nuxt/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  
}
</script>
<style scopped>
  .left-side {
    background-image:url('~/assets/images/background-login.jpg');
    height: 100vh;
  }
  .right-side {
    height: 100vh;
  }
</style>