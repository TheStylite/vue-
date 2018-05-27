import Vue from 'vue';
import app from './app.vue';
import 'mint-ui/lib/style.min.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import VueRouter from 'vue-router';
import {Header} from 'mint-ui';


Vue.component(Header.name, Header);

Vue.use(VueRouter);

import router from './router.js';


import { Swipe, SwipeItem,Button } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.root='http://vue.studyit.io/';

import { Lazyload } from 'mint-ui';

import mintui from 'mint-ui';
Vue.use(mintui);

Vue.use(Lazyload);


import VuePreview from 'vue-preview'

Vue.use(VuePreview);

Vue.use(VuePreview, {
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: true,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

import Vuex from 'vuex'
Vue.use(Vuex);

const shopcar=JSON.parse(localStorage.getItem('car'))||[];


const store=new Vuex.Store({
		state:{
			car:shopcar //将购物车商品的数据用一个数组来存储起来，将商品用一个对象来存储起来，
			//{商品id,商品数量，是否为选中购买的标志位，商品单价}
		},
		mutations:{
			addtocar(state,goodinfo){
				let flag=false;
				state.car.some(item=>{
					if(item.id==goodinfo.id){
						item.count+=parseInt(goodinfo.id);
						flag=true;
						return true;//终止循环
					}
				});
				if(!flag){
					state.car.push(goodinfo);
				};
				localStorage.setItem('car',JSON.stringify(state.car));
			},
			updatecount(state,goodinfo){
				state.car.forEach(item=>{
					if(item.id==goodinfo.id){
						item.count=goodinfo.count;
						return true;
					}
				});
				localStorage.setItem('car',JSON.stringify(state.car));
			},
			removeshop(state,id){
				state.car.some(item=>{
					if(item.id==id){
						state.car.splice(item,1);
						console.log('ok')
						return true;
					}
				});
				localStorage.setItem('car',JSON.stringify(state.car));
			},
			updateflag(state,ob){
				state.car.forEach(item=>{
					if(item.id==ob.id){
						item.buyflag=ob.flag;
					}
					return true;
				})
				localStorage.setItem('car',JSON.stringify(state.car));
			}
			
		},
		getters:{
			getallCount(state){
				let count=0;
				
     	 state.car.forEach(item=>{
     	 	count+=item.count;
     	 });
     	 return count;
   },
   		getbuyCount(state){
   			const ob={};
   			state.car.forEach(item=>{
   				ob[item.id]=item.count;
   			})
   			return ob;
   		},
   		getbuyflag(state){
   			const ob={};
   			state.car.forEach(item=>{
   				ob[item.id]=item.buyflag;
   			});
   			return ob;
   		}
		}	
});


const vue=new Vue({
	el:'#app',
	render(creat){
		return creat(app);
	},
	router,
	store
})
