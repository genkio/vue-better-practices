import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '../pages/Timeline'
import ItemDetail from '../pages/ItemDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/items/:id',
      name: 'ItemDetail',
      component: ItemDetail,
      props: true
    }
  ],
  mode: 'history'
})
