<template>
	<div id="app">
		<span>{{msg}}</span>
		<br />
		<span @click="fn($event)">{{msg2}}</span>
		<div class="test">
			this is the test!!
		</div>

		<v-header></v-header>
		<div class="tab-item">
			<router-link to="/goods">商品</router-link>
		</div>
		<div class="tab-item">
			<router-link to="/sellers">商家</router-link>
		</div>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>

	</div>
</template>

<script>
	import header from "./components/header";
	import goods from "./components/goods";
	import sellers from "./components/sellers";

	export default {
		data() {
			return {
				msg: "",
				saleMsg: [1],
				goodsMsg:''
			}
		},
		created() {
			this.$http.get('http://localhost:3000/index').then(function(response) {
				var res = response.body;
				
				// this.$nextTick(() => {
				// this指向了vm实例，this.data.msg是错误写法
				this.msg = res.name;
				// console.log(this.saleMsg[0]);
				// });

			});
		},
		components: {
			'v-header': header,
			'v-goods': goods,
			'v-sellers': sellers
		},
		computed: {
			msg2:function(){
				// console.log(this.msg);
				return this.msg +　"test!!!";
			}
		},
		methods:{
			fn:function(event){
				console.log(event.clientX);
			}
		}
	}
	
</script>

<style lang="scss">
	#app {
		.test {
			color: red;
		}
	}
</style>