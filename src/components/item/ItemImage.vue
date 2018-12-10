<template lang="html">
  <div class="card-image">
    <div class="sold-flag" v-if="isSoldOut">
      <span class="sold-flag-label is-uppercase has-text-weight-bold">sold</span>
    </div>
    <figure class="image is-4by3">
      <img :src="imgUrl" alt="Shop item image">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ItemImage',
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    isSoldOut: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.sold-flag {
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 3rem;
    border-left-color: $orange;
    border-top-color: $orange;
    z-index: 1;
  }

  &-label {
    position: absolute;
    transform: rotate(-45deg);
    top: 25px;
    left: 15px;
    color: $white;
    z-index: 1;
  }
}
</style>
