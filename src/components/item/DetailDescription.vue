<template lang="html">
  <div class="description-wrapper">
    <div class="detail-title">Product Description</div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailDescription',
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.description-wrapper {
  background: white;
  margin: 0 -1.75rem;
}
.detail-title {
  background: #eee;
  padding: 1.5rem 1.75rem .5rem 1.75rem;
}
.description {
  padding: .5rem 1.75rem 1.5rem 1.75rem;
}
</style>
