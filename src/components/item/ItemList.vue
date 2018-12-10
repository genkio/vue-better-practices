<template lang="html">
  <div class="columns is-multiline">
    <div class="column is-half"
         v-for="item in items"
         :key="item.id">
      <shop-item :item="item"/>
    </div>
  </div>
</template>

<script>
import ShopItem from './ShopItem'

export default {
  name: 'ItemList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    ShopItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.columns {
  background: #eee;
  padding-bottom: $column-gap;
}

.column {
  padding-bottom: 0;

  &:nth-child(odd) {
    padding-right: .375rem;
  }
  &:nth-child(even) {
    padding-left: .375rem;
  }
}
</style>
