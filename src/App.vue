<template lang="html">
  <div class="columns">
    <full-height-wrapper class="column is-6 is-offset-3">
      <router-view/>
    </full-height-wrapper>
  </div>
</template>

<script>
import FullHeightWrapper from './components/common/FullHeightWrapper'

export default {
  name: 'App',
  components: {
    FullHeightWrapper
  }
}
</script>

<style lang="scss" scoped>
@import './styles/main.scss';

.column {
  background: $white;
}
</style>
