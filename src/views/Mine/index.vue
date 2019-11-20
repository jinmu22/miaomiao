<template>
	<div id="main">
		<Header/>
		<TabBar/>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue';
	import TabBar from '@/components/TabBar/index.vue';
		export default{
			name:"Mine",
			components:{
				Header,
				TabBar
			}	
		}
</script>

<style>
</style>
