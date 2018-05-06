import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header/Header.vue'
import Switcher from '../components/Switcher/Switcher.vue'
import Program from '../components/Program/Program.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/switcher',
      name: 'Switcher',
      component: Switcher
    },
    {
      path: '/program',
      name: 'Program',
      component: Program
    }
  ],
  mode: 'history'
});

export default router;
