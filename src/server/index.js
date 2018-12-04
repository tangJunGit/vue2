import request from '../utils/request'

function http (url, data = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    request({
      url,
      method,
      data
    })
      .then(res => {
        // code === 0 成功
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
      .catch(err => {
        console.log('接口报错====' + url + '====', err)
      })
  })
}

export default http
