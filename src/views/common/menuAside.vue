<template>
  <div class="menu-theme t-menu-wrap">
    <div class="menu-title">
      <i class="fa fa-bookmark"></i>
      <span>教务管理</span>
    </div>
    <!-- 菜单列表 -->
    <el-menu class="menu-list" :default-active="active" :collapse="isCollapse">
      <el-submenu v-for="item in menuLIst" :key="item.index" :index="item.index">
        <template slot="title">
          <span>{{item.label}}</span>
        </template>
        <el-menu-item
           v-for="child in item.children"
          :key="child.index"
          :index="child.index"
          @click="goto(child.path)"
        >{{child.label}}</el-menu-item>
      </el-submenu>
    </el-menu>
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
  data () {
    return {
      active: '1-1',
      menuLIst: [
        { index: '1', label: '学生管理',
          children: [
            { index: '1-1', label: '学生信息', path: '/demo/list' },
            { index: '1-2', label: 'test_1', path: '/demo/test_1' },
            { index: '1-3', label: 'test_2', path: '/demo/test_2' }
          ]
        }
      ]
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/menuAside.less");
</style>
