<template lang="html">
  <div>
    <TimelineHeader :categories="categories"></TimelineHeader>
    <ItemCardList :items="shopItems"></ItemCardList>
    <SellButton
      class="sell-button"
      :on-click="onSell">
    </SellButton>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TimelineHeader from '../components/header/TimelineHeader'
import ItemCardList from '../components/item/ItemCardList'
import SellButton from '../components/common/SellButton'

export default {
  name: 'Timeline',
  components: {
    TimelineHeader,
    ItemCardList,
    SellButton
  },
  computed: {
    ...mapState('category', ['categories']),
    ...mapState('shopItem', ['shopItems'])
  },
  methods: {
    onSell () {}
  }
}
</script>

<style lang="scss" scoped>
.sell-button {
  position: fixed;
  bottom: -1.25rem;
  right: -1.25rem;
  overflow: hidden;
}
</style>
