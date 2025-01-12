import { createRouter, createWebHashHistory  } from 'vue-router'

// import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/app/actions'
    },
    {
      path: '/app',
      name: 'home',
      component: ()=> import('../views/AppView.vue'),
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('../views/DataSourceView.vue'),
          children: [
            {
              path: ':id',
              component: () => import('../views/DataSourceContent/DataSourceContent.vue')
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
