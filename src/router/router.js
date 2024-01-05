import {createRouter, createWebHistory} from 'vue-router';
import main from '@/router/main';

const routes = [
  ...main
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;