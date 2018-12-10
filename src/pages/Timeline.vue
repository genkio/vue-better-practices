<template lang="html">
  <div>
    <timeline-header :categories="categories"></timeline-header>
    <item-list :items="items"></item-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TimelineHeader from '../components/header/TimelineHeader'
import ItemList from '../components/item/ItemList'

export default {
  name: 'Timeline',
  components: {
    TimelineHeader,
    ItemList
  },
  computed: {
    ...mapState('category', ['categories']),
    ...mapState('item', ['items'])
  }
}
</script>

<style lang="css">
</style>
