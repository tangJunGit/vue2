import { MENU_LIST } from '../mutations'

const state = {
    list: [
        { moduleName: '学校管理', menuList: []},
        { moduleName: '教务管理', menuList: [
            { index: '1', label: '学生管理', children: [
                { index: '1-1', label: '学生信息', name: 'demoList', path: '/demo/list' },   // 注意：必须与路由router的name、path对应
                { index: '1-2', label: 'test', children: [
                    { index: '1-2-1', label: 'test_1', name: 'test_1', path: '/demo/test_1' }
                ]}]
            }
        ]},
        { moduleName: '教职工管理', menuList: [
            { index: '1', label: '学生管理', children: [
                { index: '1-1', label: 'test_2', name: 'test_2', path: '/demo/test_2' }]
            }
        ]},
        { moduleName: '行政办公', menuList: []},
    ],
    activeModuleName: '',
    activeMenuIndex: '-1'

}

const getters = {
    // 模块名数组
    modules: () => {
        return state.list.map(item => item.moduleName)
    },
    // 获取相应模块下的菜单列表
    menuList: () => {
        let current = state.list.filter(item => item.moduleName === state.activeModuleName);
        return current.length ? current[0].menuList : [];
    },
}

const mutations = {
    // 设置当前的模块名
    [MENU_LIST.SET_ACTICE_MODULE_NAME] (state, moduleName) {
      state.activeModuleName = moduleName;
    },
    // 设置当前菜单的index
    [MENU_LIST.SET_ACTICE_MENU_INDEX] (state, menuIndex) {
        state.activeMenuIndex = menuIndex;
      },
  }

export default {
  state,
  getters,
  mutations
}
