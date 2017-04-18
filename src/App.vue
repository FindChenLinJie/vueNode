<template>
	<div id="app">
		{{msg}}
		<div class="test">
			this is the test!!
		</div>
	</div>
</template>

<script>
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