<template>
	
	<div id="main">
		<Header/>
		<TabBar/>
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(image, index) in images" :key="index">
		    <img v-lazy="image" />
		  </van-swipe-item>
		</van-swipe>
	</div>
	
</template>


<script>
import Header from '@/components/Header/index.vue';
import TabBar from '@/components/TabBar/index.vue';
	export default{
		name:"Movie",
		components:{
			Header,
			TabBar
		},
		data() {
		    return {
		      images: [
		        'https://img.yzcdn.cn/vant/apple-1.jpg',
		        'https://img.yzcdn.cn/vant/apple-2.jpg'
		      ]
		    }
		  }
	}
</script>

<style>
</style>
