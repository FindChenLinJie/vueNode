<template>
	<div id="app">
		<span class="width-test">{{msg}}</span>
		<!--<span @click="fn($event)">{{msg2}}</span>-->
		<br> {{$store.state.count}} {{ count }}
		<br>
		<!--
			<button @click="increase">+</button>
			<button @click="decrease">-</button>
			-->
		<br>
		<!-- 头部组件 -->
		<v-header></v-header>
	
		<!-- 主体部分 -->
		<div class="tab-item">
			<!--v-bind的形式是动态的-->
			<router-link :to="{path:'/goods'}">商品</router-link>
		</div>
		<div class="tab-item">
			<!-- :to="{path:'/goods/sellGoods', param:{color: 'yellow'}}" 传参数给组件 this.$route.param -->
			<router-link :to="{path:'/goods/sellGoods'}">商品子组件</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="{path:'/sellers'}">商家</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="{path:'/comments'}">评论</router-link>
		</div>
		<!-- 路由渲染内部组件 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	
		<!-- 尾部组件 -->
		<v-footer></v-footer>
	</div>
</template>

<script>
import header from "./components/header/header.vue";
// import goods from "./components/goods/goods.vue";
// import sellers from "./components/sellers/sellers";
// import comment from "./components/comment/comment";
import footer from "./components/footer/footer";

// import { mapGetters, mapActions } from 'vuex';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

// 请求express地址
const AJAX_URL = "http://localhost:3000/";
// AJAX_URL + 'index'

export default {
	data() {
		return {
			msg: ""
		}
	},
	created() {
		this.$http.get("http://rapapi.org/mockjs/17902/data/goods").then(function (response) {
			var res = response.body;
			console.log(res);
			// this.$nextTick(() => {
			// this指向了vm实例，this.data.msg是错误写法
			// this.msg = res.seller.name;
			// console.log(this.saleMsg[0]);
			// });

		});
	},
	components: {  // 对象
		'v-header': header,
		// 'v-goods': goods,
		// 'v-sellers': sellers,
		// 'v-comment': comment
		'v-footer': footer,
	},
	// computed: mapState({
	// 	// msg2: function () {
	// 	// 	// console.log(this.msg);
	// 	// 	return this.msg + "test!!!";
	// 	// },
	// 	// count: function(){
	// 	// 	console.log(this.$store.state.count);
	// 	// 	return this.$store.state.count;
	// 	// }
	// 	// count: state => state.count,
	// 	count: function(state){
	// 		return this.$store.state.count;
	// 	},
	// }),
	// computed: {
	// 	count: function(state){
	// 		return this.$store.getters.count;
	// 	}
	// },
	computed: {
		...mapGetters([
			'count'
		])
	},
	methods: {
		fn: function (event) {
			console.log("当前点击的位置是：" + event.clientX);
		}
		// ,
		// increase: function () {
		// 	this.$store.commit('increase');
		// },
		// decrease: function () {
		// 	this.$store.commit('decrease');
		// }
	}
}

</script>

<style lang="scss">
#app {
	.width-test {
		display: inline-block;
		height: 2.6667rem;
		width: 2.6667rem;
		line-height: 2.6667rem;
		text-align: center;
		border: 1px solid #ccc;
	}
}
</style>