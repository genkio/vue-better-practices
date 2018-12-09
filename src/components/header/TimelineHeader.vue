<template lang="html">
  <header-wrapper>
    <template slot="main">
      <div class="column is-1">
        <sidebar-menu-toggle/>
      </div>
      <div class="column is-9">
        <search-form placeholder="Search"/>
      </div>
      <div class="column is-1">
        <notification-toggle/>
      </div>
      <div class="column is-1 pl-0">
        <todo-list-toggle/>
      </div>
    </template>
    <category-sub-header
      slot="sub-header"
      :categories="categories">
    </category-sub-header>
  </header-wrapper>
</template>

<script>
import HeaderWrapper from './HeaderWrapper'
import SearchForm from './SearchForm'
import SidebarMenuToggle from './SidebarMenuToggle'
import NotificationToggle from './NotificationToggle'
import TodoListToggle from './TodoListToggle'
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
    SearchForm,
    SidebarMenuToggle,
    NotificationToggle,
    TodoListToggle,
    CategorySubHeader
  }
}
</script>

<style lang="css">
</style>
