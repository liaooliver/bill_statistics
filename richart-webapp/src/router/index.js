import React from 'react';
import Home from '../pages/Home';

// React router setting file
const routes = [
    {
        path: '/list',
        // 透過懶加載(lazy load)的方式引入元件
        component: React.lazy(() => import("../pages/List"))
    },
    {
        path: '/analysis',
        component: React.lazy(()=> import('../pages/Analysis'))
    },
    {
        path: '/import',
        component: React.lazy(() => import('../pages/Import'))
    },
    {
        path: '/setting',
        component: React.lazy(() => import('../pages/Setting'))
    },
    {
        path: '/404',
        component: React.lazy(()=> import('../components/Exception'))
    },
    {
        path: '/500',
        component: React.lazy(()=> import('../components/Exception'))
    },
    {
        path: '/',
        component: Home
    }
]

export default routes;