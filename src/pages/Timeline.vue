<template lang="html">
  <div>
    <timeline-header :categories="categories"></timeline-header>
    <item-card-list :items="items"></item-card-list>
    <sell-button
      class="sell-button"
      :on-click="onSell">
    </sell-button>
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
    ...mapState('item', ['items'])
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
