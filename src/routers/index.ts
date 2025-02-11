import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...adminRoutes,
  ],
});

// // 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/admin') {
//     if (!token) {
//       next({ path: '/login' });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
