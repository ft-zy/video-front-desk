import * as Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Main.vue'

export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/doLogin.vue'),
    },
    // {
    //     path: '/registered',
    //     name: 'registered',
    //     component: () => import('../view/login/Registered.vue'),
    // },
    {
        path: '/policy',
        name: 'policy',
        component: () => import('../view/login/policy.vue'),
    },
    {
        path: '/forgot',
        name: 'forgot',
        component: () => import('../view/login/ForgotPwd.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/main',
        children: [
            {
                path: '/main',
                component: () => import('../layout/dashboard/Index.vue'),
            },
        ]
    },
    {
        path: '/play_movie',
        component: Layout,
        redirect: '/play_movie',
        children: [
            {
                path: '/play_movie',
                component: () => import('../view/play/PlayMovie.vue'),
            },
        ]
    },
    {
        path: '/play_anime',
        component: Layout,
        redirect: '/play_anime',
        children: [
            {
                path: '/play_anime',
                component: () => import('../view/play/PlayAnime.vue'),
            },
        ]
    },
    {
        path: '/play_tv',
        component: Layout,
        redirect: '/play_tv',
        children: [
            {
                path: '/play_tv',
                component: () => import('../view/play/PlayTv.vue'),
            },
        ]
    },
    {
        path: "/series",
        component: Layout,
        redirect: '/series',
        children: [
            {
                path: "/series",
                component: () => import('../view/Tv/TV_Series.vue')
            }
        ]
    },
    {
        path: "/movie",
        component: Layout,
        redirect: '/movie',
        children: [
            {
                path: "/movie",
                component: () => import('../view/Tv/Movie.vue')
            }
        ]
    },
    {
        path: "/anime",
        component: Layout,
        redirect: '/anime',
        children: [
            {
                path: "/anime",
                component: () => import('../view/Tv/Anime.vue')
            }
        ]
    },
    {
        path: "/UserInfo",
        component: Layout,
        redirect: '/UserIno',
        children: [
            {
                path: "/UserIno",
                component: () => import('../view/user/UserInfo.vue')
            }
        ]
    },
    {
        path: "/EditUserInfo",
        component: Layout,
        redirect: '/EditUserInfo',
        children: [
            {
                path: "/EditUserInfo",
                component: () => import('../view/user/EditUserInfo.vue')
            }
        ]
    },
    {
        path: "/MsgInfo",
        component: Layout,
        redirect: '/MsgInfo',
        children: [
            {
                path: "/MsgInfo",
                component: () => import('../layout/header/MsgInfo.vue')
            }
        ]
    },
    {
        path: '/:path(.*)',
        name: '404',
        component: () => import('../view/error/Error.vue'),
        meta: {
            title: '404'
        }
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    mode: 'history',
})

export default router
