<template>
  <el-row>
    <el-col :span="12">
      <div class="page-title">
        <h1>{{title}}</h1>
      </div>
    </el-col>
    <el-col :span="12" class="text-right">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="page-breadcrumb">
        <el-breadcrumb-item v-for="(value, index) in items" :key="index">{{value}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ['title', 'items']
}
</script>
<style lang="less" scoped>
.page-title {
  h1 {
    margin: 0 0 14px;
    color: #000;
    font-size: 18px;
  }
}
.page-breadcrumb {
  display: inline-block;
  margin-top: 4px;
}
</style>

