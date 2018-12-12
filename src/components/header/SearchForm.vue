<template lang="html">
  <form>
    <div class="control">
      <input
        class="input"
        type="text"
        :placeholder="placeholder">
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
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
