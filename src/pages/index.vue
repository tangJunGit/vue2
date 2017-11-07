<style lang="less" scoped>
	.text{
    span{
      font-size: 16px;
    }
  }
</style>
<template>
	<div class="text">
		<span>{{text}}</span>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        text: '哈哈，恭喜你已经入坑Vue2'
      }
    }
  }
</script>