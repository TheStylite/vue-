<template>
	
	<div>
			<mt-swipe :auto="3000">
  				<mt-swipe-item v-for='item in list' :key='item.id'>
  				<img :src="item.img"/>		
  			</mt-swipe-item>
  			
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		                    <img src="img/menu1.png"/>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imglist">
		                   <img src="img/menu2.png"/>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="img/menu3.png"/>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="img/menu4.png"/>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="img/menu5.png"/>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="img/menu6.png"/>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		           
		        </ul> 
		
		
	</div>
	
	
</template>

<script>
	import { Toast } from 'mint-ui';
	
	export default {
		data(){
			return{
				list:[
				{id:0,img:'../img/01.jpg'},
				{id:1,img:'../img/02.jpg'},
				{id:2,img:'../img/03.jpg'}
				]
			}
		},
		created(){	
			this.getlunbo();
		}
		,
		methods:{
			getlunbo(){
//				this.$http.get('http://vue.studyit.io/api/getlunbo').then((res)=>{
//					
//				})
				if(!this.list.length){
					Toast('jj....');
				}
				
			}
			
			
		}
		
	}
	
	
</script>

<style scoped lang="less">
	.mint-swipe{
		height: 200px;
		.mint-swipe-item{
			background-color: red;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
			background-color: white;
			border: none;
			img{
				width: 60px;
			}
		}
		.mui-grid-view.mui-grid-9 .mui-table-view-cell{
			border: none;
		}
	
</style>