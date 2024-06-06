import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/home.vue'
import LoginView from '../views/loginView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;