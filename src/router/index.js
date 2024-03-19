import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { useProductsStore } from "@/stores/productsStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      // route level code-splitting
      // this generates a separate chunk (Contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/ContactsPage.vue')
    },
    {
      path: '/categories',
      name: 'Categories',
      // route level code-splitting
      // this generates a separate chunk (Categories.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/CategoriesPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (Product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/ProductPage.vue'),

      beforeEnter(to, from) {
        const productsStore = useProductsStore();
        // productsStore.getProducts(100);
        // const exist = productsStore.products?.find(item => item.id == to.params.id)
        const exist = productsStore.total >= to.params.id

        if (!exist) {
          return {
            name: "NotFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (Cart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/CartPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (Cart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/NotFoundPage.vue')
    },
  ]
})

export default router
