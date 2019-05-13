import { ROUTER_TAB } from '../mutations'

const state = {
    openTab:[],             //所有打开的路由
    activeIndex: ''     //激活状态
}

const mutations = {
    // 添加tabs
    [ROUTER_TAB.ADD] (state, data) {
        state.openTab.push(data);
    },
    // 删除tabs
    [ROUTER_TAB.DELETE] (state, path) {
        let index = 0;
        for (let option of state.openTab) {
            if (option.path === path) {
                break;
            }
            index++;
        }
        state.openTab.splice(index, 1);
    },
    // 清空tabs
    [ROUTER_TAB.CLEAR] (state) {
        state.openTab = [];
    },
    // 设置当前激活的tab
    [ROUTER_TAB.SET_ACTICE_INDEX] (state, index) {
        state.activeIndex = index;
    },
}

export default {
  state,
  mutations
}