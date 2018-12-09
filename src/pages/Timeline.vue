<template lang="html">
  <div>
    <timeline-header :categories="categories"></timeline-header>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TimelineHeader from '../components/header/TimelineHeader'

export default {
  name: 'Timeline',
  components: {
    TimelineHeader
  },
  computed: {
    ...mapState('category', ['categories'])
  }
}
</script>

<style lang="css">
</style>
