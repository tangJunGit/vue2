<template>
    <el-row>
      <el-col :span="12">
        <div class="t-page-title">
          <h1>{{title}}</h1>
        </div>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="t-page-breadcrumb">
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
