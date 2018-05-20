import Vue from 'vue';
import app from './app.vue';
import 'mint-ui/lib/style.min.css';
import './lib/mui/css/mui.min.css';
import {Header} from 'mint-ui';
Vue.component(Header.name, Header);

const vue=new Vue({
	el:'#app',
	render(creat){
		return creat(app);
	}
	
})
