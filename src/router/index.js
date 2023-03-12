import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NotFoundView from '@/views/NotFoundView.vue'

import EventView from '@/views/EventView.vue'
import PhotoReportView from '@/views/PhotoReportView.vue'
import MenuView from '@/views/MenuView.vue'

const routes = [
  {
    path: '',
    name: 'default_layout',
    component: DefaultLayout,
    children: [

      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/events',
        name: 'events',

        children:[
          {
            path:':id',
            name: 'eventPage',
            component: EventView,
          },
        ],
      },
      {
        path: '/photo_report',
        name: 'photo_report',
        redirect: {name: 'home'},
        children:[
          {
            path:':id',
            name: 'photoReportPage',
            component: PhotoReportView,
          },
        ],
      },
      {
        path: '/menu',
        name: 'menu',
        component: MenuView,
      },
      {
        path: '/:catchAll(.*)',
        name: 'not_found',
        redirect: {name: 'home'},
      }
    ]
  },
  {
    path: '/404',
    name: 'not_found',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(from)
    console.log(savedPosition)
    const header = document.getElementById("header")
    switch (to.hash){
      case "#header":
        return {
          top: 520,
        }
      case "#menu":
        console.log(to.query.category_id)
        if (to.query.category_id) {
          return {
            el: '#category-' + to.query.category_id,
            top: header.offsetHeight,
            left: 9999,
          }
        }
        return {
          top: 520,
        }

    }


    if (to.hash === "#header"){
      console.log(123)
      return {
        top: 520,
      }
    }
  }
})

export default router
