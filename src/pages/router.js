import { createRouter, createWebHistory } from 'vue-router'
import Operator from './Operator.vue'
import Handler from './handler/Handler.vue'

const routes = [
    {
        path: '/operator/:platform',
        component: Operator,
        children: [
            {
                path: 'BTC/quarter/buy/open',
                component: Handler,
            }
        ]
    },
    { path: '', redirect: "/operator/virtual" }
]

const router = createRouter({
    mode: createWebHistory(),
    routes
})

export default router