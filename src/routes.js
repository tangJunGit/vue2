import index from './pages/index'

export default [
    {
        path: '/index',
        name: 'index',
        component: index,
    },
    {
        path: '/lazyLoad',
        name: 'lazyLoad',
        component: resolve => require(['./pages/lazyLoad'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
]