<template lang="html">
  <div
    class="wrapper"
    :class="{'is-sold-out': item.isSoldOut}">
    <h3 class="is-size-5">
      {{ item.description }}
    </h3>
    <detail-controls :like-count="item.like_count"></detail-controls>
    <detail-description :description="item.description"></detail-description>
  </div>
</template>

<script>
import DetailControls from './DetailControls'
import DetailDescription from './DetailDescription'

export default {
  name: 'DetailBody',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    DetailControls,
    DetailDescription
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: .25rem 1rem 0 1rem;
  margin-bottom: 4rem;
}
.is-sold-out {
  margin-bottom: 0;
}
</style>
