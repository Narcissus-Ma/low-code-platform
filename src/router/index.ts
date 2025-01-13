import { createRouter, createWebHashHistory  } from 'vue-router'

// import AppView from '../views/AppView.vue'
import DataSourceView from '../views/DataSourceView.vue'
import DataSourceContent from '../views/DataSourceContent/DataSourceContent.vue'
// import PageLayoutView from '../views/PageLayoutView.vue'

// todo 动态引入，部署到线上会报错，问题尚不明确
const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/app/layout'
    },
    {
      path: '/app',
      name: 'home',
      component: ()=> import('../views/AppView.vue'),
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          // component: () => import('../views/DataSourceView.vue'),
          component: DataSourceView,
          children: [
            {
              path: ':id',
              // component: () => import('../views/DataSourceContent/DataSourceContent.vue')
              component: DataSourceContent
            },
            {
              path: '',
              redirect: '/app/dataSource/1'
            }
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('../views/PageLayoutView.vue')
          // component: PageLayoutView
        },
        {
          path: 'actions',
          name: 'actions',
          component: () => import('../views/ActionsView.vue')
        }
      ]
    }
  ]
})

export default router
