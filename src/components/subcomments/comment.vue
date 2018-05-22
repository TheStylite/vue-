<template>
	<div class="comment-container">
		<h3>发表评论</h3>
		<hr />
		<textarea name="" rows="" cols="" placeholder="请输入。。。" maxlength="20"></textarea>
		
		<mt-button type='primary' size='large'>发表评论</mt-button>
		
		<div class="cmt-list">
			<div class="cmt-item">
				<div class="cmt-title">
					第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;发表时间:0000
				</div>
				<div class="cmt-body">
					哈哈哈
				</div>
			</div>
			<div class="cmt-item">
				<div class="cmt-title">
					第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;发表时间:0000
				</div>
				<div class="cmt-body">
					哈哈哈
				</div>
			</div>
		</div>
		<mt-button type='danger' size='large' plain>加载更多</mt-button>
	</div>
</template>

<script>
	
	export default{
		props:['id']
	}
		
</script>

<style lang="less" scoped="">
	.cmt-list{
		margin: 15px 0;
		font-size: 15px;
		.cmt-title{
			background-color: #CCCCCC;
			padding: 5px 0;
		}
		.cmt-body{
			background-color: whitesmoke;
			line-height: 35px;
			text-indent: 2em;
		}
		
	}


</style>