<template lang="html">
  <header-wrapper>
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
  </header-wrapper>
</template>

<script>
import HeaderWrapper from './HeaderWrapper'
import SearchForm from './SearchForm'
import SidebarMenuToggle from './SidebarMenuToggle'
import NotificationToggle from './NotificationToggle'
import TodoListToggle from './TodoListToggle'

export default {
  name: 'TimelineHeader',
  components: {
    HeaderWrapper,
    SearchForm,
    SidebarMenuToggle,
    NotificationToggle,
    TodoListToggle
  }
}
</script>

<style lang="css">
</style>
