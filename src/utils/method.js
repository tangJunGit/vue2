const data = {
  get (object, path, defaultValue) {
    let _getValue = function (object, path) {
      path = _stringToPath(path + '')

      let index = 0
      let length = path.length

      while (object !== null && index < length) {
        object = object[path[index++]]
      }
      return index && index === length ? object : undefined
    }

    let _stringToPath = function (path) {
      let prop = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
      let result = []

      path.replace(prop, function (match, number) {
        result.push(number || match)
      })
      return result
    }

    let result = object == null ? undefined : _getValue(object, path)
    return result === undefined ? defaultValue : result
  },
  findIndex (array, attrs) {
    for (let i = 0, length = array.length; i < length; i++) {
      if (data.isMatch(array[i], attrs)) return i
    }
    return -1
  },
  isMatch (object, attrs) {
    let keys = Object.keys(attrs)
    let length = keys.length
    if (object === null) return !length

    for (let i = 0; i < length; i++) {
      let key = keys[i]
      if (attrs[key] !== object[key] || !(key in object)) return false
    }
    return true
  },
  clone (data) {
    const obj = {}
    for (let key in data) {
      if (data.hasOwnProperty(key)) obj[key] = data[key]
    }
    return obj
  }
}

const time = {
  format (date, format) {
    if (format === undefined) {
      format = date
      date = new Date()
    }
    let map = {
      M: date.getMonth() + 1, // 月份
      d: date.getDate(), // 日
      h: date.getHours(), // 小时
      m: date.getMinutes(), // 分
      s: date.getSeconds(), // 秒
      q: Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds()
    }
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
      let v = map[t]
      if (v !== undefined) {
        if (all.length > 1) {
          v = '00' + v
          v = v.substr(v.length - (t === 'S' ? 3 : 2))
        }
        return v
      } else if (t === 'y') {
        return (date.getFullYear() + '').substr(4 - all.length)
      }
      return all
    })
    return format
  }
}

export { data, time }
