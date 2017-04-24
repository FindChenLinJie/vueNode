<template>
	<div class="header">
		<span>this is header组件!!!</span>
		<button @click="increase">+</button>
		<button @click="decrease">-</button>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		increase: function () {
			// this.$store.commit('increase');
			this.$store.dispatch('add');
		},
		decrease: function () {
			this.$store.commit('decrease');
		}
	}
};
</script>

<style lang="scss">
.header span {
	color: #0095ff;
}
</style>