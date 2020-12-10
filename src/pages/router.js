import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Operator from './Operator.vue'
import Handle from './handle/Handle.vue'

const routes = [
    {
        path: '/operator/:platform',
        component: Operator,
        children: [
            {
                path: '/operator/:platform/:symbol',
                component: Operator,
                children: [
                    {
                        path: '/operator/:platform/:symbol/:contractType/:direction/:offset',
                        component: Handle
                    }
                ]
            }
        ]
    },
    { path: '', redirect: "/operator/virtual" }
]

const router = createRouter({
    mode: createWebHistory(),
    routes: routes
})

export default router