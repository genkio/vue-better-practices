<template lang="html">
  <div class="columns is-mobile">
    <div class="column is-6-tablet is-offset-3-tablet is-12-mobile">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import './styles/main.scss';

.column {
  background: $white;
}
</style>
