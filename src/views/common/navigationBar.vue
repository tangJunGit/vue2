<template>
  <div class="t-navigationBar-wrap">
    <div class="t-logo" @click="collapse">
      <img class="logo" src="../../assets/images/logo.png" alt>
    </div>
    <div class="t-list">
      <el-row>
        <el-col :span="2">
          <i class="t-bar fa fa-bars"></i>
        </el-col>
        <el-col :span="22" class="text-right">
          <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <i class="t-icon el-icon-bell"></i>
          </el-tooltip>
          <el-dropdown trigger="click" class="t-item">
            <img class="t-avatar" src="../../assets/images/avatar.jpg" alt>
            <span class="t-user">admin</span>
            <el-dropdown-menu slot="dropdown" class="t-user-dropdown">
              <el-dropdown-item><i class="t-user-icon fa fa-info-circle"></i>个人信息</el-dropdown-item>
              <el-dropdown-item><i class="t-user-icon fa fa-sign-out"></i>退出</el-dropdown-item>
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
      this.$emit('update:isCollapse', !this.isCollapse);
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/navigationBar.less");
</style>
<style>
</style>
