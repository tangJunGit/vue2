<template>
  <div class="t-navigationBar-wrap">
    <div class="t-logo" @click="collapse">
      <img class="logo" src="../../assets/images/logo.png" alt>
    </div>
    <div class="t-list">
      <el-row>
        <el-col :span="20">
          <i class="t-bar fa fa-bars"></i>
        </el-col>
        <el-col :span="4" class="text-right">
          <i class="t-icon el-icon-bell"></i>
          <el-dropdown trigger="click" class="t-item">
            <img class="t-avatar" src="../../assets/images/avatar.jpg" alt>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row> 
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
  methods:{
    collapse(){
      this.$emit('changeCollapse', !this.isCollapse)
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/navigationBar.less");
</style>
