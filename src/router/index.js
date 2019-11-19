import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from '@/services/Firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
      meta: {
          protected: true
      },
    component: Home
  },
    {
        path: '/login',
        name: 'login',
        component: () => import( '@/views/Login')
    },
  {
    path: '/index.html', // ? or '*' this is for PWA
    beforeEnter: (_to, _from, next) => {
      next('/')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    if(!to.meta.protected) { //route is public, don't check for authentication
        next()
    } else {  //route is protected, if authenticated, proceed. Else, login
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                next()
            } else {
                console.log('Not logged In')
                // next('/login')
                window.location.href = '/login'
            }
        })
    }
});

export default router
