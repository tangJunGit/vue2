import { MENU_LIST } from '../mutations'

function getMatchMenu(menuList, currentMenuName) {
    let node = null;          // 获取的子节点
    let code = 'label';          //  匹配的属性
    let children = 'children';    //  包含子节点的属性

    /**
     * 根据 NodeID 查找当前节点以及父节点
     * json    数据源
     * nodeId  匹配的值
     */
    let getNode = (json, nodeName) => { 
        for (let i = 0; i < json.length; i++) {
            let obj = json[i];
            if (!nodeName) break;
            if (!obj || !obj[code]) continue;
            if (obj[code] == nodeName) {
                node = obj;
                break;
            } else {
                if (obj[children]) {
                    getNode(obj[children], nodeName);
                } else {
                    continue;
                }
            }
        }
        return node;
    }

    return getNode(menuList, currentMenuName);
};


const state = {
    list: [
        { moduleName: '学校管理', menuList: [
            { index: '1', label: '学生管理', children: [
                { index: '1-1', label: '学生信息', path: '/demo/list' },
                { index: '1-2', label: '添加学生', path: '/demo/add'}]
            },
            { index: '2', label: '班级管理', path: '/demo/test_1'}
        ]},
        { moduleName: '教务管理', menuList: [
            { index: '1', label: '学年学期', path: '/demo/test_2'}
        ]},
        { moduleName: '教职工管理', menuList: []},
        { moduleName: '行政办公', menuList: []},
    ],
    activeModuleName: '',
    activeMenuIndex: '-1',
    activeMenuName: '',

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
    // 设置当前菜单的name，设置index
    [MENU_LIST.SET_ACTICE_MENU_NAME] (state, menuName) {
        state.activeMenuName = menuName;
        
        // 设置当前菜单的index
        let menuList = getters.menuList();
        let current = getMatchMenu(menuList, state.activeMenuName);
        if(current === null) return;   // 未找到相应菜单
        state.activeMenuIndex = current.index;
    },
  }

export default {
  state,
  getters,
  mutations
}
