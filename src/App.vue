<template>
	<div id="app">
		{{msg}}
		<div class="test">
			this is the test!!
		</div>
		<v-header></v-header>
		<div class="tab-item">
			<router-link to="/goods">商品</router-link>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import header from "./components/header";
	import goods from "./components/goods";

	export default {
		data() {
			return {
				msg: ""
			}
		},
		created() {
			this.$http.get('http://localhost:3000/index').then(function(response) {
				var res = response.body;

				this.$nextTick(() => {
					// this指向了vm实例，this.data.msg是错误写法
					this.msg = res.name;
				});

			});
		},
		components: {
			'v-header': header,
			'v-goods': goods
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