import index from './pages/home'

/**
 * auth true 登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/home',
        name: 'home',
        meta: { auth: false },
        component: index,
    },

    // 懒加载
    {
        path: '/lazyLoad',
        name: 'lazyLoad',
        meta: { auth: false },
        component: resolve => require(['./pages/lazyLoad/index.vue'], resolve)
    },

    // 登录守卫
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['./pages/login/index.vue'], resolve)
    },
    {
        path: '/system',
        name: 'system',
        component: resolve => require(['./pages/system/index.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/home'
    }
]