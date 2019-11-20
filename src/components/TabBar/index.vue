<template>
	<van-tabbar v-model="active">
	  <van-tabbar-item>
	    <router-link to="/movie" tag="span">电影</router-link>
	    <img
	      slot="icon"
	      slot-scope="props"
	      :src="props.active ? icon.active : icon.inactive"
	    >
		
	  </van-tabbar-item>
	  <router-link to="/cinema" tag="van-tabbar-item"><van-tabbar-item icon="search">影院</van-tabbar-item></router-link>
	  <router-link to="/mine" tag="van-tabbar-item"><van-tabbar-item icon="setting-o">我的</van-tabbar-item></router-link>
	</van-tabbar>
	
</template>

<script>
	export default{
		name:"TabBar",
		data() {
		    return {
		      active: 0,
		      icon: {
		        active: 'https://img.yzcdn.cn/vant/user-active.png',
		        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
		      }
		    }
		  }
		
	}
</script>

<style>
</style>
