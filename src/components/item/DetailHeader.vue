<template lang="html">
  <HeaderWrapper>
    <template slot="main">
      <div class="column is-1">
        <IconButton
          icon="chevron-left"
          :on-click="onBack"/>
      </div>
      <div class="column is-9">
        <HeaderTitle :title="title"/>
      </div>
      <div class="column is-1">
        <IconButton
          icon="search"
          :on-click="onSearch"/>
      </div>
      <div class="column is-1 pl-0">
        <IconButton
          icon="share"
          :on-click="onToggleShare"/>
      </div>
    </template>
  </HeaderWrapper>
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
