<template lang="html">
  <div class="wrapper">
    <img :src="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'DetailImage',
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  height: 400px;
  margin: .75rem -.75rem 0 -.75rem;
  border-bottom: 1px solid #eee;
}
</style>
