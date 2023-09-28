import {loadNotFoundView, makeFallbackRoute} from './helpers'
import {middlewares} from '@/app/middlewares'
import Base from '@/resources/views/master/Base.vue'
import BaseBlank from '@/resources/views/master/BaseBlank.vue'

export const routes = [
    {
        path: '/',
        component: Base,
        meta: {
            middleware: middlewares,
        },
        children: [
            {
                path: 'clear-site-data',
                name: 'clear_site_data',
                component: () => import('@/resources/views/pages/ClearSiteData.vue'),
            },
            {
                path: 'error',
                component: BaseBlank,
                children: [
                    {
                        path: '404',
                        name: 'not_found',
                        component: loadNotFoundView,
                    },
                    //
                    ...makeFallbackRoute(true),
                ],
            },
            // {
            //     path: '',
            //     name: 'root',
            //     component: () => import('@/resources/views/pages/Home.vue'),
            // },
            //
            {
                path: ':network',
                component: () => import('@/resources/views/pages/blockchain/Base.vue'),
                children: [
                    {
                        path: 'account',
                        name: 'blockchain___account',
                        component: () => import('@/resources/views/pages/blockchain/Account.vue'),
                    },
                    {
                        path: 'token',
                        name: 'blockchain___token',
                        component: () => import('@/resources/views/pages/blockchain/Token.vue'),
                    },
                    ...makeFallbackRoute('ethereum/account', 'blockchain_root'),
                ],
            },
            // {
            //     path: 'about',
            //     name: 'about',
            //     component: () => import('@/resources/views/pages/About.vue'),
            // },
            //
            ...makeFallbackRoute('ethereum/token', 'root'),
        ],
    },
]
