import {type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import PilaView from '../view/PilaView.vue'
import ColaView from '../view/ColaView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: PilaView
    },
    {
        path: '/cola',
        name: 'cola',
        component: ColaView
    },
]

const router = createRouter({
    /* history: createWebHashHistory(), */
    history: createWebHistory(),
    routes
}) 

export default router