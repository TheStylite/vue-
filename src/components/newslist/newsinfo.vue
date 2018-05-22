<template>
	
	<div id="newsinfo-container">
		<h4 class="title">新闻详情--{{id}}</h4>
		<p class="subtitle">
			<span>发表时间:2011-25</span>
			<span>已被查看:0次</span>
		</p>
		<hr />
		
		<div>
			dasdasdsadasdsa
			dasdasdsadasdsa
			dasdasdsadasdsa
			dasdasdsadasdsa
			
		</div>
		<div>
			dasdasdsadasdsa
			dasdasdsadasdsa
			dasdasdsadasdsa
			dasdasdsadasdsa
			
		</div>
		<div>
			dasdasdsadasdsa
			dasdasdsadasdsa
			dasdasdsadasdsa
			dasdasdsadasdsa
		</div>
		<comment></comment>
	</div>
</template>

<script>
	import comment from '../subcomments/comment.vue';
	export default{
		data(){
			return{
				id:this.$route.params.id
			}
		},
		components:{
			comment
		}
	}
</script>

<style lang="less" scoped>
	#newsinfo-container{
		padding: 0 4px;
		.title{
			font-size: 18px;
			text-align: center;
			margin: 15px 0;
		}
		.subtitle{
			display: flex;
			justify-content: space-between;
		}
		
	}
</style>