import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods';
import sellers from '../components/sellers/sellers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
    	path:'/sellers',
    	name: 'sellers',
    	component: sellers
    }
  ]
});