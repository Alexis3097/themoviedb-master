import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movieView',
    component: () => import('../views/MovieView.vue')
  },
  {
    path: '/tvshow',
    name: 'tvshowView',
    component: () => import('../views/TvShowView.vue')
  },
  {
    path: '/movieDetail/:id',
    name: 'movieDetail',
    component: () => import('../views/MovieDetailView.vue')
  },
  {
    path: '/tvShowDetail/:id',
    name: 'tvShowDetail',
    component: () => import('../views/TvShowDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router