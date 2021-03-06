
import VueRouter from 'vue-router';

import home from './components/tabbar/homecontainer.vue';
import user from './components/tabbar/usercontainer.vue';
import shopcar from './components/tabbar/shopcarcontainer.vue';
import search from './components/tabbar/searchcontainer.vue';
import news from './components/newslist/news.vue';
import newsinfo from './components/newslist/newsinfo.vue';
import photolist from './components/photos/photolist.vue';
import photoinfo from './components/photos/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import goodsinfo from './components/goods/goodsinfo.vue';
import goodsdec from './components/goods/goodDec.vue';
import goodscom from './components/goods/goodComments.vue';


const router=new VueRouter({
	routes:[
	{path:'/',redirect:'/home'},
	{path:'/home',component:home},
	{path:'/member',component:user},
	{path:'/shopcar',component:shopcar},
	{path:'/search',component:search},
	{path:'/home/news',component:news},
	{path:'/home/newsinfo/:id',component:newsinfo},
	{path:'/home/imglist',component:photolist},
	{path:'/home/photoinfo/:id',component:photoinfo},
	{path:'/home/goodslist',component:goodslist},
	{path:'/home/goodsinfo/:id',component:goodsinfo},
	{path:'/home/goodsinfo/:id',component:goodsinfo},
	{path:'/home/goodsdec/:id',component:goodsdec,name:'goodsdec'},
	{path:'/home/goodscom/:id',component:goodscom,name:'goodscom'},
	],
	linkActiveClass:'mui-active'
});


export default router
