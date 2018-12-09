<template lang="html">
  <div class="columns is-mobile">
    <full-height-wrapper
      class="column is-6-tablet is-offset-3-tablet is-12-mobile">
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
