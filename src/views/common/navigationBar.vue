<template>
  <div class="t-navigationBar navigationBar-theme" style="height: 100%;position:relative;">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt>
      <span>校园管理平台</span>
    </div>
    <div class="list">
      <el-tabs class="t-module-wrap" v-model="activeModule">
        <el-tab-pane label="学校管理" name="1"></el-tab-pane>
        <el-tab-pane label="教务管理" name="2"></el-tab-pane>
        <el-tab-pane label="教职工管理" name="3"></el-tab-pane>
        <el-tab-pane label="行政办公" name="4"></el-tab-pane>
      </el-tabs>
      <div class="item-wrap">
        <div class="item">
          <i class="icon fa fa-volume-up"></i>
          <span class="border-right">(<span class="small">12</span>)</span>
        </div>
        <div class="item">
          <span>admin</span>
          <span class="border-right">(<span class="small">超级管理员</span>)</span>
        </div>
        <div class="item">
          <span @click="exit">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeModule: '2'
    }
  },
  methods:{
    collapse(){
      this.$emit('update:isCollapse', !this.isCollapse);
    },
    exit(){
      this.$router.push({name: 'login'});
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/navigationBar.less");
</style>
