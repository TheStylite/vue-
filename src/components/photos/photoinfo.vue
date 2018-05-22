<template>
	<div class="content">
		
		<h2>这是图片信息组件</h2>
		<p class="subtitle">	
			<span>发表时间</span>
			<span>点击次数</span>
		</p>
		
		<hr />
		
		<div class="pho">
			<vue-preview :slides="photoinfo" @close="handleClose"></vue-preview>
		</div>
		<div class="content">
			dsadsadsadsadsa
			dsadsadsa
			这是图片信息
			这是图片信息
			这是图片信息
		</div>
		
		<cmt :id='id'></cmt>
	</div>
	
</template>

<script>
	import cmt from '../subcomments/comment.vue';
	export default {
		data(){
			return {
				id:this.$route.params.id,
				photoinfo:[
					{
            		src: '../../img/01.jpg',
            		msrc: '../../img/menu1.png',
            		alt: 'picture1',
            		title: 'Image Caption 1',
           			w: 600,
            		h: 400
         		},
         		{
            		src: '../../img/01.jpg',
            		msrc: '../../img/menu1.png',
            		alt: 'picture1',
            		title: 'Image Caption 1',
           			w: 600,
            		h: 400
         		},
         		{
            		src: '../../img/01.jpg',
            		msrc: '../../img/menu1.png',
            		alt: 'picture1',
            		title: 'Image Caption 1',
           			w: 600,
            		h: 400
         		},
					
				]//图片详情
			};
		},
		methods:{
			getphoto(){
				this.$http.get('....').then((data)=>{
				})
			},
			handleClose(){
				 console.log('close event');
			}
		},
		components:{
			cmt
		}
	}
</script>
 
<style scoped lang="less">
	.content{
		h2{
			font-size: 15px;
			text-align: center;
		}
		padding:15px 10px;
		.subtitle{
			display: flex;
			justify-content: space-between;
		}
		.pho{
			figure{
				display: inline-block;
				margin: 0;
			}
		}
		
	}
	
	
</style>