<template>
  <div style="height: 100%;background: #eaeef3;">
    <el-container class="container">
      <el-header height="60px" class="header">
        <navigationBar :isCollapse.sync="isCollapse"></navigationBar>
      </el-header>
      <el-container>
        <el-aside width="auto" class="aside">
          <menuAside :isCollapse="isCollapse"></menuAside>
        </el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navigationBar from './navigationBar'
import menuAside from './menuAside'
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  components: {
    navigationBar,
    menuAside
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/common/container.less');
</style>