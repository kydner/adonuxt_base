<template>
  <b-row align-v="center">
    <b-col cols="12">
      <b-input-group prepend="0" append="100" class="mt-3">
        <b-form-input type="range" min="0" max="100"></b-form-input>
      </b-input-group>
      <div class="h2 mb-0">
    <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
  </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  layout: 'auth',
  auth: 'guest',
  data() {
    return {
      value4: null
    }
  }
}
</script>