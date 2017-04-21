import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods';
import sellers from '../components/sellers/sellers';
import comments from "../components/comment/comments"

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/goods' // 初始化路由
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods
        },
        {
            path: '/sellers',
            name: 'sellers',
            component: sellers
        },
        {
            path: '/comments',
            name: 'comments',
            component: comments
        }
    ]
});