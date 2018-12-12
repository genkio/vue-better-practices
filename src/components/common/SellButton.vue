<template lang="html">
  <div class="wrapper">
    <span class="text">出品</span>
    <span class="icon">
      <i class="fas fa-camera"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SellButton',
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.wrapper {
  position: relative;
  width: 8rem;
  height: 8rem;
  line-height: 8rem;
  border-radius: 50%;
  color: $white;
  text-align: center;
  background: $orange;
  cursor: pointer;

  .icon {
    font-size: 3rem;
    position: relative;
    top: 1.75rem;
  }
  .text {
    font-size: 1.25rem;
    display: inline-block;
    position: absolute;
    top: -1.75rem;
    left: 2.75rem;
  }
}
</style>
