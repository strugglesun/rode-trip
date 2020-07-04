import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import OrderDetails from '../views/OrderDetails.vue'
import SearchView from '../views/SearchView.vue'
import TravelDetail from '../views/TravelDetail.vue'
import Leader from '../views/Leader.vue'
import LeaderDetail from '../views/LeaderDetail.vue'
import SignUp from '../views/SignUp.vue'
import EditOrder from '../views/EditOrder.vue'
import SelectTourist from '../views/SelectTourist.vue'
import ConfirmOrder from '../views/ConfirmOrder.vue'
import AddTourist from '../views/AddTourist.vue'
import PayMethod from '../views/PayMethod.vue'
import PaySuccess from '../views/PaySuccess.vue'
import MapItem from '../views/MapItem.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  }, 
  {
    path: '/mapItem',
    name: 'MapItem',
    component: MapItem,
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView,
  },
  {
    path: '/leader',
    name: 'Leader',
    component: Leader,
  },
  {
    path: '/leaderDetail',
    name: 'LeaderDetail',
    component: LeaderDetail,
  },
  {
    path: '/signUp/:id',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/editOrder/:id',
    name: 'EditOrder',
    component: EditOrder,
  },
  {
    path: '/confirmOrder/:id',
    name: 'ConfirmOrder',
    component: ConfirmOrder,
  },
  {
    path: '/payMethod/:id',
    name: 'PayMethod',
    component: PayMethod,
  },
  {
    path: '/paySuccess/:id',
    name: 'PaySuccess',
    component: PaySuccess,
  },
  {
    path: '/selectTourist',
    name: 'SelectTourist',
    component: SelectTourist,
  },
  {
    path: '/addTourist',
    name: 'AddTourist',
    component: AddTourist,
  },
  {
    path: '/travel/:id',
    name: 'TravelDetail',
    component: TravelDetail,
  },
  {
    path: '/user/:id',
    name: 'OrderDetails',
    component: OrderDetails
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
