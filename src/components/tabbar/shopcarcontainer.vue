<template>
	<div class="shopcontainer">
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
				
					<mt-switch v-model='$store.getters.getbuyflag[id]'
						@change='selectedchange(id,$store.getters.getbuyflag[id])'></mt-switch>
					<img src="../../img/menu2.png"/>
					<div class="info">
						<h1>商品名称</h1>
						<p>
							<span class="price">￥2199</span>
							<box :initcount='$store.getters.getbuyCount[id]'
								:id='id'></box>
							<a href="#" @click.prevent="remove(id)">删除</a>
						</p>
						
					</div>
					</div>
				</div>
		</div>
		
		
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
				
			结算区域
			
					</div>
				</div>
		</div>
		
	</div>
	
	
</template>

<script>
	
	import box from '../subcomments/shopcarbox.vue';
	export default {
		
		data(){
		return {
			id:1
		}
		}
		,
		methods:{
			remove(id){
			console.log('ss');
			this.$store.commit('removeshop',id);
			},
			selectedchange(id,flag){
				this.$store.commit('updateflag',{id:id,flag:flag});
			}
	
		},
		components:{
			box
		}
	}
	
</script>

<style  scoped lang="less">

	.shopcontainer{
		background-color: #CCCCCC;
		overflow: hidden;
		
		.mui-card-content-inner{
		display: flex;
		justify-content: space-around;
		padding:10px;
		align-items: center;
		h1{
			font-size: 13px;
		}
		img{
			width: 60px;
			height: 60px;
			
		}	
		}
		
	}


</style>