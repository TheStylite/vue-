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


import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



import VueResource from 'vue-resource';
Vue.use(VueResource);


const vue=new Vue({
	el:'#app',
	render(creat){
		return creat(app);
	},
	router
})
