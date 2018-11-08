import { COUNT } from '../mutations'

const state = {
  num: 0
}

const getters = {
  doneCount: (state, getters) =>
    state.num > 10 ? '已超过10了，你真厉害！' : '请连续点击按钮'
}

const mutations = {
  [COUNT.ADD] (state) {
    state.num++ // 变更状态
  }
}

export default {
  state,
  getters,
  mutations
}
