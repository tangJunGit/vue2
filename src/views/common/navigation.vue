<template>
  <div class="t-navigation-wrap">
    <el-row>
        <el-col :span="12">
          <img class="logo" src="../../assets/images/logo.png" alt="">
        </el-col>
        <el-col :span="12" class="text-right">
          <el-badge is-dot class="badge t-item">
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown trigger="click" class="t-item">
            <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
    </el-row>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/navigation.less");
</style>
