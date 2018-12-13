<template lang="html">
  <ul class="category-list">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"/>
  </ul>
</template>

<script>
import CategoryItem from './CategoryItem'

export default {
  name: 'CategorySubHeader',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    CategoryItem
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 1rem;
}
</style>
