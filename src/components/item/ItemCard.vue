<template lang="html">
  <router-link
    class="card is-block"
    :to="{ name: 'ItemDetail', params: { id: item.id } }">
    <ItemCardImage
      :img-url="item.image"
      :is-sold-out="item.isSoldOut">
    </ItemCardImage>
    <div class="card-content">
      <div class="content">
        <h3 class="is-size-6 is-overflow-hidden">
          {{ item.description }}
        </h3>
        <ItemCardFooter
          :price="item.price"
          :like-count="item.like_count">
        </ItemCardFooter>
      </div>
    </div>
  </router-link>
</template>

<script>
import ItemCardImage from './ItemCardImage'
import ItemCardFooter from './ItemCardFooter'

export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ItemCardImage,
    ItemCardFooter
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  padding: .5rem;
}
</style>
