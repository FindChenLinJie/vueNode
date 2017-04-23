import Vue from 'vue';
import Router from 'vue-router';

import goods from "../components/goods/goods";
import sellGoods from "../components/sellGoods/sellGoods";
import sellers from "../components/sellers/sellers";
import comments from "../components/comment/comments";

Vue.use(Router);

export default new Router({
    // mode: "history", // 去掉hash值
    routes: [{
            path: '/',
            redirect: '/goods' // 初始化路由,重定向
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods,
            children: [{
                path: 'sellGoods',
                name: 'sellGoods',
                component: sellGoods
            }]
        },
        {
            path: '/sellers',
            // name: 'sellers',
            component: sellers
        },
        {
            path: '/comments',
            // name: 'comments',
            component: comments
        }
    ]
});