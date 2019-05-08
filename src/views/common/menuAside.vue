<template>
  <div class="t-menuAside-wrap">
    <!-- 菜单列表 -->
    <el-menu class="menu" :default-active="active" :collapse="isCollapse"
    background-color="rgb(48, 65, 86)" text-color="rgb(191, 203, 217)" active-text-color="rgb(64, 158, 255)">
      <el-submenu v-for="item in menuLIst" :key="item.index" :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
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
        { index: '1', label: '一级菜单', icon: 'fa fa-bookmark',
          children: [
            { index: '1-1', label: '二级菜单', path: '/demo/list' }
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
