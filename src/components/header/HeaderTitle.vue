<template lang="html">
  <h3 class="is-size-5 is-overflow-hidden has-text-weight-bold">
    {{ title }}
  </h3>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
