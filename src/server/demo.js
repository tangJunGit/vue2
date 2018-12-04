import http from './index'

export default {
  demo: function (data) {
    return http('demo', data)
  }
}
