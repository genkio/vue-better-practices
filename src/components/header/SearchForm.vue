<template lang="html">
  <form>
    <div class="control">
      <input
        class="input"
        type="text"
        :placeholder="placeholder"
        v-model="searchTerm">
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchForm',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  watch: {
    searchTerm () {
      this.searchShopItems(this.searchTerm)
    }
  },
  methods: {
    ...mapActions('shopItem', ['searchShopItems'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

input.input {
  background-color: $white-ter;
  border-radius: 4px;
  box-shadow: 0 0;
}
</style>
