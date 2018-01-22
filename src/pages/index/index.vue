<template>
  <div class="index indexComponent">
		<img src="assets/images/logo.png" class="logo" alt="logo.png">
    <span>{{text}}</span>
    
    <div class="btns">
      <button class="btn" @click="goto">懒加载</button>
    </div>
	</div>
</template>
<script src="./index.js"></script>
<!--<style src="./index.css"></style>  这样引入的全局样式-->
<style lang="less" scoped>
@import url("./index.less");
</style>