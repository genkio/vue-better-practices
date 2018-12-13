<template lang="html">
  <div class="wrapper">
    <div class="has-text-white">
      <span class="price is-size-3">
        {{ price | currency }}
      </span>
      <span class="is-size-7">
        {{ shippingFee }}
      </span>
    </div>
    <button class="button is-large">購入手続きへ</button>
  </div>
</template>

<script>
export default {
  name: 'DetailFooter',
  props: {
    id: {
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    shippingFee: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
  position: fixed;
  bottom: 0;
  width: 51%;
  min-height: 4rem;
  background: $dark;
  margin: 0 -.75rem;

  @media (max-width: $mobile) {
    width: 100%;
  }
}

.button {
  border: none;
  color: $white;
  background: $orange;
}
</style>
