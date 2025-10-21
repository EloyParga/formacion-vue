import { createRouter, createWebHistory } from 'vue-router'
import PostListView from '@/views/PostListView.vue'
import PostDetailView from '@/views/PostDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //usar el historial web
  routes: [
    {
      path: '/',
      redirect: to => { return {name: 'PostList'} }, //redireccionar a /post
    },
    {
      path: '/post',
      name: 'PostList',
      component: PostListView,
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: PostDetailView,
    },
  ],
})

export default router
