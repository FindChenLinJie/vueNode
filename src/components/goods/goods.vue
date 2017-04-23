<template>
	<div>
		<span>this is goods路由!!!</span>
		<!-- 子路由渲染内部组件 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style>

</style>