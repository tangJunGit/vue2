import index from './pages/index'

export default [
    {
        path: '/index',
        name: 'index',
        component: index,
    },
    {
      path: '*',
      redirect: '/index'
    }
]