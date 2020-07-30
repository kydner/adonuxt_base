<template>
  <b-row align-v="center">
    <b-col cols="12">
      <b-input-group prepend="0" append="100" class="mt-3">
        <b-form-input type="range" min="0" max="100"></b-form-input>
      </b-input-group>
    </b-col>
  </b-row>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      value4: null
    }
  }
}
</script>