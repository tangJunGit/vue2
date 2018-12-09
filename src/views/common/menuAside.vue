<template>
  <div class="t-menuAside-wrap">
    <!-- 用户信息 -->
    <div class="user-panel">
      <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
      <p class="info">烟花易冷</p>
    </div>
    
    <!-- 菜单列表 -->
    <el-menu class="menu"
      default-active="1-1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-submenu v-for="item in menuLIst" :key="item.index" :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="child in item.children" :key="child.index" :index="child.index">{{child.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data(){
    return {
      menuLIst: [
        { 
          index: '1',
          label: '样式',
          icon: 'el-icon-menu',
          children: [
            {
              index: '1-1',
              label: '表格'
            },
            {
              index: '1-2',
              label: '表单'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/menuAside.less");
</style>
