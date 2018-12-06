<template>
  <div class="t-container-wrap">
    <el-container class="container">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
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
export default {

}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/container.less");
</style>
