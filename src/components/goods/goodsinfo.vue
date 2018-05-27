<template>
	
	<div class="goosinfo">
		
		 <transition
      		 @before-enter="beforeEnter"
     		 @enter="enter"
     		 @after-enter="afterEnter">
      		<div class="ball" v-show="ballFlag" ref='ball'></div>
   		 </transition>
		
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
							<mt-swipe :auto="2000">
  								<mt-swipe-item v-for='item in list' :key='item.id'>
  								<img :src="item.img"/>		
  							</mt-swipe-item>
  							</mt-swipe>
					</div>
				</div>
		</div>
		<div class="mui-card">
				<div class="mui-card-header">商品的名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p class="price">
						<span>市场价:<del>￥2333</del></span>&nbsp;&nbsp;
						<span>销售价:￥{{price}}</span>
						<p>购买数量:<numberbox @postcount='getCount'></numberbox></p>
					</p>
					
					<mt-button type='primary' size='small'>加载更多</mt-button>
					<mt-button type='danger' size='small'  @click='postshopcar'>加入购物车</mt-button>
					</div>
				</div>
		</div>
		
		<div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号</p>
						<p>上架情况</p>
						<p>库存情况</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type='primary' size='large' plain 
						@click='goDec(id)'>图文介绍</mt-button>
					<mt-button type='danger' size='large' plain
						@click='goCom(id)'>商品情况</mt-button>
				</div>
		</div>
		
	</div>
	
	
</template>

<script>
	
	import numberbox from '../subcomments/numberbox.vue';
	
	export default {
		data(){
			return {
				list:[
				{id:0,img:'../../img/01.jpg'},
				{id:1,img:'../../img/02.jpg'},
				{id:2,img:'../../img/03.jpg'}
				],
				id:this.$route.params.id,
				ballFlag:false, // 控制小球的隐藏和显示的标识符,
				selected:1,
				price:2222
			}
		},
		components:{
			numberbox
		},
		methods:{
			goDec(id){
				this.$router.push({name:'goodsdec',params:{id}})
			},
			goCom(id){
				this.$router.push({name:'goodscom',params:{id}})
			},
			beforeEnter(el) {
      			el.style.transform = "translate(0, 0)";
   			 },
    		enter(el, done) {
      			el.offsetWidth;

      // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
 
     // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getCount(count){
    	this.selected=count;
    },
    postshopcar(){
    	this.ballFlag = !this.ballFlag;
//  	{商品id,商品数量，是否为选中购买的标志位，商品单价}
		const goodinfo={
			id:this.id,
			count:this.selected,
			price:this.price,
			buyflag:true
		};
		console.log(goodinfo);
		this.$store.commit('addtocar',goodinfo);
    }
		}
	}
	
</script>

<style scoped lang="less" scoped>
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
		
	.goosinfo{
		
		.mui-card-footer{
			display: block;
			button{
				margin: 10px 0;
			}
		}
		.ball {
   			width: 15px;
    		height: 15px;
    		border-radius: 50%;
    		background-color: red;
    		position: absolute;
    		z-index: 99;
    		top: 390px;
    		left: 146px;
  }
		
	}
	
</style>