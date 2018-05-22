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

const vue=new Vue({
	el:'#app',
	render(creat){
		return creat(app);
	},
	router
})
