<template>
	
	<div>
		<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',{'mui-active':item.id==0}]" href="#item1mobile"
							v-for="item in list">
							{{item.title}}
						</a>
						
					</div>
				</div>

			</div>
		
		<ul class="photos">
  			<router-link  v-for="item in imglist" :key='item.id' 
  				:to="'/home/photoinfo/'+item.id"
  				tag='li'>
    			<img v-lazy="item.imgurl">
    			<div class="info">
    				<h1 class="info-title">哈哈</h1>
    				<div class="info-body">简约，优雅，时尚</div>
    			</div>
  			</router-link>
		</ul>
	</div>
	
	
</template>

<script>
	
	import mui from '../../lib/mui/js/mui.min.js';
	export default {
		data(){
			return {
				list:[
				{id:0,title:'全部'},
				{id:1,title:'生活'},
				{id:2,title:'设计'},
				{id:3,title:'动画'},
				{id:4,title:'艺术'},
				{id:5,title:'音乐'},
				],
				imglist:[
				{id:0,imgurl:'../../img/01.jpg'},
				{id:1,imgurl:'../../img/02.jpg'},
				{id:2,imgurl:'../../img/03.jpg'}
				]
			}
		},
		mounted(){
			mui(".mui-scroll-wrapper").scroll({
     		 deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
   		 });
		}
		,
		methods:{
			
			
		}
		
	}
	
</script>

<style scoped lang="less">
	*{
		touch-action: pan-y;
	}
	.photos{
		list-style:none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
		
		li{
			position: relative;
			background-color: whitesmoke;
			text-align: center;
			 /*这个是懒加载的样式,不要修改*/
			img[lazy='loading']{ 
  				width: 40px;
  				height: 300px;
  				margin: auto;
			}
			img{
				width: 100%;
  				vertical-align: middle;
			}
			.info{
				width: 100%;
				position: absolute;
				bottom: 0;
				background-color: rgba(0,0,0,.2);
				color: white;
				text-align: left;
				max-height: 84px;
				.info-title{
					font-size: 13px;
				}
				.info-body{
					font-size: 14px;
				}
			}
		}
		
	}
	
</style>