
import VueRouter from 'vue-router';

import home from './components/tabbar/homecontainer.vue';
import user from './components/tabbar/usercontainer.vue';
import shopcar from './components/tabbar/shopcarcontainer.vue';
import search from './components/tabbar/searchcontainer.vue';

const router=new VueRouter({
	routes:[
	{path:'/',redirect:'/home'},
	{path:'/home',component:home},
	{path:'/member',component:user},
	{path:'/shopcar',component:shopcar},
	{path:'/search',component:search}
	],
	linkActiveClass:'mui-active'
});


export default router
