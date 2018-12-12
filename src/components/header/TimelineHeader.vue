<template lang="html">
  <header-wrapper>
    <template slot="main">
      <div class="column is-1">
        <icon-button
          icon="bars"
          :on-click="onToggleSidebarMenu">
        </icon-button>
      </div>
      <div class="column is-9">
        <search-form placeholder="Search"/>
      </div>
      <div class="column is-1">
        <icon-button
          icon="bell"
          :on-click="onToggleNotification">
        </icon-button>
      </div>
      <div class="column is-1 pl-0">
        <icon-button
          icon="check"
          :on-click="onToggleTodoList">
        </icon-button>
      </div>
    </template>
    <category-sub-header
      slot="sub-header"
      :categories="categories">
    </category-sub-header>
  </header-wrapper>
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
