<template lang="html">
  <div>
    <h2>Item Detail: {{ id }}</h2>
    <p>Go back to <router-link to="/">timeline</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',
  props: ['id']
}
</script>

<style lang="css">
</style>
