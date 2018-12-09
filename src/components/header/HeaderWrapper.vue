<template lang="html">
  <div class="wrapper">
    <div class="columns is-mobile">
      <slot name="main"></slot>
    </div>
    <slot name="sub-header"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderWrapper'
}
</script>

<style lang="scss" scoped>
.columns {
  border-bottom: 1px solid #eee;
}
</style>
