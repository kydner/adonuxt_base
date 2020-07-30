<template>
  <b-container fluid>
    <b-row align-v="center">
      <b-col cols="6" class="left-side px-4 py-3 d-none d-lg-block">
        <h5>Test 123</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique quas autem, esse quaerat repudiandae corrupti, recusandae voluptate quidem suscipit eos, quos obcaecati at perferendis id laudantium nostrum possimus? Tempora!</p>
      </b-col>
      <b-col class="right-side px-4 py-3">
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
    background-color:#f1fcfc;
    height: 100vh;
  }
  .right-side {
    height: 100vh;
  }
</style>