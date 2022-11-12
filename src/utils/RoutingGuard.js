import router from "../router";
import {getToken} from "./auth";

const whiteList = ['/login', '/forgot', '/policy']

router.beforeEach((to, from, next) => {
    const token = getToken();
    if (token) {
        if (to.path === '/login' || to.path === '/') {
            next({ path: '/' })
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})