// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vueResource from 'vue-resource';

Vue.use(vueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例  */
new Vue({
    el: '#app',
    router,
    vueResource,
    template: '<App/>',
    components: {
        App
    }
});