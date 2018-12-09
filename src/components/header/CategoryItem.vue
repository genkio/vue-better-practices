<template lang="html">
  <li class="category-item">
    <a href="#" class="has-text-grey">
      {{ item.name }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.category-item {
  display: inline;
  padding: 0 1.5rem;
}
</style>
