<template>
  <div class="t-navigationBar navigationBar-theme" style="height: 100%;position:relative;">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt>
      <span>校园管理平台</span>
    </div>
    <div class="list">
      <el-tabs class="t-module-wrap" v-model="activeModuleName">
        <el-tab-pane v-for="(item, index) in modules" :key="index" :label="item" :name="item"></el-tab-pane>
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
import { MENU_LIST } from "../../store/mutations.js";
export default {
  props:{
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    collapse(){
      this.$emit('update:isCollapse', !this.isCollapse);
    },
    exit(){
      this.$router.push({name: 'login'});
    }
  },
  computed: {
    modules() {
      return this.$store.getters.modules; 
    },
    activeModuleName: {
      get () {
        return this.$store.state.menuList.activeModuleName;
      },
      set (val) {
        this.$store.commit(MENU_LIST.SET_ACTICE_MENU_INDEX, '-1');   //切换模块后，清除菜单index === -1
        this.$store.commit(MENU_LIST.SET_ACTICE_MODULE_NAME, val);
      }
    }
  },
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/navigationBar.less");
</style>
