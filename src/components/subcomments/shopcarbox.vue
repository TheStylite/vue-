<template>
		<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initcount" 
						@change="getvalue" ref='numbox'/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js';
	export default{
		mounted(){
			mui("mui-numbox").numbox();
		},
		methods:{
			getvalue(){	
				const ob={
					id:this.id,
					count:parseInt(this.$refs.numbox.value)
				}
				this.$store.commit('updatecount',ob);
				console.log(ob);
			}
		},
		props:['initcount','id']
	}
</script>

<style>
	
	
	
</style>