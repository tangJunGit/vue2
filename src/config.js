// 请求接口的前缀路径
export const baseURL = process.env.NODE_ENV === 'production' ? '/api' : '';

// 页码数
export const pageSizes = [10, 20, 50];   // 页码数数组
export const pageSize = 10;    // 默认页码数