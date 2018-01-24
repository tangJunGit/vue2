<template>
  <div class="home indexComponent">
		<img src="assets/images/logo.png" class="logo" alt="logo.png">
    <span>{{text}}</span>
    
    <div class="btns">
      <button class="btn" @click="goto">懒加载</button>
      <router-link class="btn" to="login">守卫登录</router-link>
    </div>
	</div>
</template>
<script src="./home.js"></script>
<style lang="less" src="./home.less"></style>