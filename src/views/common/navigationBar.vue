<template>
  <div style="width: 100%;display: table;">
    <div class="logo">
      <img src="../../assets/images/logo.png" @click="collapse" alt>
    </div>
    <div class="list">
      <el-row>
        <el-col :span="2">
          <i class="bar fa fa-bars"></i>
        </el-col>
        <el-col :span="22" class="text-right">
          <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <i class="icon el-icon-bell"></i>
          </el-tooltip>
          <el-dropdown trigger="click" class="item">
            <img class="avatar" src="../../assets/images/avatar.jpg" alt>
            <span class="user">admin</span>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <el-dropdown-item><i class="user-icon fa fa-info-circle"></i>个人信息</el-dropdown-item>
              <el-dropdown-item><i class="user-icon fa fa-sign-out"></i>退出</el-dropdown-item>
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
