<template lang="html">
  <div class="item-card-footer">
    <span class="price has-text-weight-bold">
      {{ price | currency }}
    </span>
    <div class="like-wrapper">
      <a href="#">
        <span class="icon is-medium has-text-grey-lighter">
          <i class="fas fa-heart"></i>
        </span>
      </a>
      <span class="like-count">
        {{ likeCount }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCardFooter',
  props: {
    price: {
      type: Number,
      required: true
    },
    likeCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-wrapper {
  display: flex;
  align-items: center;
}
</style>
