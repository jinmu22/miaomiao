import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './mine'
import mineRouter from './cinema'


Vue.use(VueRouter)
 
const routes= [
	movieRouter,
	cinemaRouter,
	mineRouter
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
