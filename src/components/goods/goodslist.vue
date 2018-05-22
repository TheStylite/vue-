<template>
	<div class="goodslist">
		<div class="good-item">
			<img src="../../img/menu1.png"/>
			<h1 class="title">小米小米小米小米小米小米小米小米小米</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥888</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>
		<div class="good-item">
			<img src="../../img/menu1.png"/>
			<h1 class="title">小米</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥888</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>
		<div class="good-item">
			<img src="../../img/menu1.png"/>
			<h1 class="title">小米</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥888</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.goodslist{
		display: flex;
		flex-wrap: wrap;
		padding: 8px;
		justify-content: space-between;
		.good-item{
			display: flex;
			flex-direction: column;  /*改变主轴为y轴*/
			justify-content: space-between;
			border: 1px solid #CCCCCC;
			box-shadow: 0 0 8px #CCCCCC;
			width: 49%;
			margin:3px 0;
			img{
				width: 100%;
			}
			.title{
				font-size: 15px;
			}
		}
		.info{
			background-color: #C0C0C0;
			margin: 0;
			padding: 2px;
			padding-left:15px;
			.price{
				margin: 0;
				.now{
					color: red;
				}
				.old{
					text-decoration: line-through;
					font-size: 12px;
				}
			}
			.sell{
				display: flex;
				justify-content: space-between;
			}
		}
	}

</style>