<template lang="html">
  <div>
    <timeline-header :categories="categories"></timeline-header>
    <item-card-list :items="items"></item-card-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TimelineHeader from '../components/header/TimelineHeader'
import ItemCardList from '../components/item/ItemCardList'

export default {
  name: 'Timeline',
  components: {
    TimelineHeader,
    ItemCardList,
  },
  computed: {
    ...mapState('category', ['categories']),
    ...mapState('item', ['items'])
  }
}
</script>

<style lang="css">
</style>
