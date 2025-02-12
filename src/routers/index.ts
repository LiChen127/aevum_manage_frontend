import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/Layout.vue'),
    },
    ...adminRoutes,
  ],
});

export default router;
