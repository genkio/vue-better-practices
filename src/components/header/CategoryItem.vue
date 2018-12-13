<template lang="html">
  <li class="category-item">
    <span
      :class="[ isActive
        ? 'has-text-orange has-text-weight-bold'
        : 'has-text-grey'
      ]"
      @click="selectCategory(category.id)">
      {{ category.name }}
    </span>
  </li>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('category', ['activeId']),
    isActive () {
      return this.category.id === this.activeId
    }
  },
  methods: {
    ...mapActions('category', ['selectCategory'])
  }
}
</script>

<style lang="scss" scoped>
.category-item {
  display: inline;
  padding: 0 1.5rem;
  cursor: pointer;
}
</style>
