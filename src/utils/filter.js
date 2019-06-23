import { time, getLabel } from './method'

const filter = {
  // 时间格式
  timeFormat (date, format) {
    return time.format(date, format)
  },
  formatAllDate (date) {
    return time.format(date, 'yyyy-MM-dd hh:mm')
  },
  formatDate (date) {
    return time.format(date, 'yyyy-MM-dd')
  },
  date (timestamp) {
    return new Date(timestamp * 1000)
  },

  // 保留小数
  toFixed (number, digit) {
    if (number === undefined) return 0
    return (+number).toFixed(digit || 0)
  },

  // 通过值获取
  getLabel (value, list, valueKey, labelKey) {
    return getLabel(value, list, valueKey, labelKey)
  }

}

export default filter
