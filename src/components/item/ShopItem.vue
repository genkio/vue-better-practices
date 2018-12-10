<template lang="html">
  <div class="card">
    <item-image
      :img-url="item.image"
      :is-sold-out="item.isSoldOut">
    </item-image>
    <div class="card-content">
      <div class="content">
        <h3 class="is-size-6">{{ item.description }}</h3>
        <item-footer
          :price="item.price"
          :like-count="item.like_count">
        </item-footer>
      </div>
    </div>
  </div>
</template>

<script>
import ItemImage from './ItemImage'
import ItemFooter from './ItemFooter'

export default {
  name: 'ShopItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ItemImage,
    ItemFooter
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  padding: .5rem;

  h3 {
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
