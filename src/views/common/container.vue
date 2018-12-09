<template>
  <div class="t-container-wrap">
    <el-container class="container">
      <el-header height="60px" class="header">
        <navigation></navigation>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <p>Aside</p>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navigation from "./navigation.vue";
export default {
  components:{
    navigation
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/container.less");
</style>
