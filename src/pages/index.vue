<style lang="less" scoped>
	.index{
    .logo{
      width:200px;
    }
    span{
      display: block;
      font-size: 16px;
    }
    .btns{
      margin-top: 30px;
    }
    .btn{
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 4px;
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
      &:hover {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
      }
    }
    
  }
</style>
<template>
  <div class="index">
		<img src="assets/images/logo.png" class="logo" alt="logo.png">
    <span>{{text}}</span>
    
    <div class="btns">
      <button class="btn" @click="goto">懒加载</button>
    </div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        text: '哈哈，恭喜你已经入坑Vue2'
      }
    },
    methods: {
      goto(){
        this.$router.push({ name: 'lazyLoad'})
      }
    }
  }
</script>