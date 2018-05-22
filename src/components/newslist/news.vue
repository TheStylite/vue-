<template>
	<div id="">
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/1">
						<img class="mui-media-object mui-pull-left" src="https://a.msstatic.com/huya/main/img/logo.png">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>
								<span class="text-over">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
								<span>点击:1次</span>
							</p>
							
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://a.msstatic.com/huya/main/img/logo.png">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>
								<span class="text-over">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
								<span>点击:1次</span>
							</p>
							
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://a.msstatic.com/huya/main/img/logo.png">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>
								<span class="text-over">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
								<span>点击:1次</span>
							</p>
							
						</div>
					</a>
				</li>

			</ul>
		
		
	</div>
</template>

<script>
//	import {Toast} from 'mint-ui';
//	export default {
//		data(){
//			return {
//				newslist:[]
//			}
//		},
//		created(){
//			this.getnewslist();
//		}
//		,
//		methods:{
//			getnewslist(){
//				
//				this.$http.get('api/getnewslist')
//					.then((data)=>{
//						console.log(data.body);
//					});
//			}
//			
//		}	
//	}
	
	
</script>

<style lang="less" scoped="">
	.mui-table-view{
		.mui-ellipsis{
			display: flex;
			justify-content:space-between;
			span.text-over{
				width: 50%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			
			
		}
	}
	


</style>