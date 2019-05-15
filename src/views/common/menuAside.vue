<template>
  <div class="menu-theme t-menu-wrap text-nowrap">
    <div class="menu-title">
      <i class="fa fa-bookmark"></i>
      <span>{{moduleName}}</span>
    </div>
    <!-- 菜单列表 -->
    <div v-if="loading">
      <el-menu class="menu-list" :default-active="activeMenu" :collapse="isCollapse">
        <MenuTree :menuLIst="menuLIst" @clickMenuItem="clickMenuItem"></MenuTree>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { MenuTree } from "../../components";
import { MENU_LIST } from "../../store/mutations.js";
export default {
  props:{
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      loading: true
    }
  },
  created(){
    this.activeMenu = '1-1';
  },
  methods: {
    // 点击菜单的跳转，改变菜单index值
    clickMenuItem(menuItem){
      this.activeMenu = menuItem.index;
      this.$router.push(menuItem.path);
    }
  },
  watch:{
    activeMenu(newVal){
      // 当切换模块时，菜单index === '-1'，重新渲染菜单列表
      if(newVal === '-1'){
        this.loading = false;
        this.$nextTick(() => {
          this.loading = true;
        })
      }
    }
  },
  computed: {
    moduleName() {
      return this.$store.state.menuList.activeModuleName; 
    },
    menuLIst(){
      return this.$store.getters.menuList; 
    },
    activeMenu: {
      get () {
        return this.$store.state.menuList.activeMenuIndex;
      },
      set (val) {
        this.$store.commit(MENU_LIST.SET_ACTICE_MENU_INDEX, val);
      }
    }
  },
  components: {
    MenuTree
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/menuAside.less");
</style>
