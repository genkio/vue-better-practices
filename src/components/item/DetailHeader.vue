<template lang="html">
  <header-wrapper>
    <template slot="main">
      <div class="column is-1">
        <icon-button
          icon="chevron-left"
          :on-click="onBack">
      </div>
      <div class="column is-9">
        <header-title :title="title"/>
      </div>
      <div class="column is-1">
        <icon-button
          icon="search"
          :on-click="onSearch">
        </icon-button>
      </div>
      <div class="column is-1 pl-0">
        <icon-button
          icon="share"
          :on-click="onToggleShare">
        </icon-button>
      </div>
    </template>
  </header-wrapper>
</template>

<script>
import IconButton from '../common/IconButton'
import HeaderWrapper from '../header/HeaderWrapper'
import HeaderTitle from '../header/HeaderTitle'

export default {
  name: 'DetailHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    IconButton,
    HeaderWrapper,
    HeaderTitle,
  },
  methods: {
    onSearch () {},
    onToggleShare () {},
    onBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.column.is-9 {
  display: flex;
  align-items: center;
}
</style>
