<template>
  <div class="t-container-wrap">
    <el-container class="container">
      <el-header height="60px" class="header">
        <navigationBar></navigationBar>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <menuAside></menuAside>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navigationBar from "./navigationBar";
import menuAside from "./menuAside";
export default {
  components:{
    navigationBar,
    menuAside
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/container.less");
</style>
