import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/home.vue'
import LoginView from '../views/loginView.vue'
import Perfil from '../views/perfil.vue'
import Default from '../layouts/Default.vue'
import Blank from '../layouts/blank.vue'
import { auth } from '@/plugins/firebase'

const routes = [
  {
    path: '/',
    component: Default,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil
      },
    ]
  },
  {
    path: '/',
    component: Blank,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginView
      },
    ]
  }
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }

})

export default router;