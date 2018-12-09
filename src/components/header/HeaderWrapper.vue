<template lang="html">
  <div class="wrapper">
    <div class="columns">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderWrapper'
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}
</style>
