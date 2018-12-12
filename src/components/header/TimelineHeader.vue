<template lang="html">
  <HeaderWrapper>
    <template slot="main">
      <div class="column is-1">
        <IconButton
          icon="bars"
          :on-click="onToggleSidebarMenu"/>
      </div>
      <div class="column is-9">
        <SearchForm placeholder="Search"/>
      </div>
      <div class="column is-1">
        <IconButton
          icon="bell"
          :on-click="onToggleNotification"/>
      </div>
      <div class="column is-1 pl-0">
        <IconButton
          icon="check"
          :on-click="onToggleTodoList"/>
      </div>
    </template>
    <CategorySubHeader
      slot="sub-header"
      :categories="categories">
    </CategorySubHeader>
  </HeaderWrapper>
</template>

<script>
import IconButton from '../common/IconButton'
import HeaderWrapper from './HeaderWrapper'
import SearchForm from './SearchForm'
import CategorySubHeader from './CategorySubHeader'

export default {
  name: 'TimelineHeader',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    HeaderWrapper,
    IconButton,
    SearchForm,
    CategorySubHeader
  },
  methods: {
    onToggleSidebarMenu () {},
    onToggleNotification () {},
    onToggleTodoList () {}
  }
}
</script>

<style lang="css">
</style>
