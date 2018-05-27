<template>
	<div class="app_container">
		
		<!--顶部header区域-->
		 <mt-header fixed title="vue项目">
		 	<span  slot='left' @click="goback" v-show="flag">
		 		<mt-button icon='back'>返回</mt-button>
		 	</span>
		 </mt-header>
		
		<!--中间路由区域-->
		<transition>
			<router-view></router-view>
		</transition>
		
		 

		<!--底部区域-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1 mui" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getallCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>	
</template>
<script>
	export default{
		data(){
			return {
				flag:false
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		},
		created(){  //因为在哈希值是在改变的时候才会触发事件，所以当组件刚创建出来时就应该判断一下路由
			this.flag=(this.$route.path=='/home'?false:true);
		}
		,
		watch:{
			'$route.path':function(newval){
				this.flag=(newval=='/home'?false:true);
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.app_container{
		padding-top: 40px;
		overflow-x: hidden;
		padding-bottom: 50px;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.4s linear; 
	}
	
	 .mui-bar-tab .mui-tab-item1.mui-active {
      color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
      font-size: 11px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      }
</style>