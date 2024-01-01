import {createRouter, createWebHistory} from 'vue-router';
import general from '@/router/general';

const routes = [
  ...general
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;