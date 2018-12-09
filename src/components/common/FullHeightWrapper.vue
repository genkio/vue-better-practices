<template lang="html">
  <div class="wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'FullHeightWrapper'
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
