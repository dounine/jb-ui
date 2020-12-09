import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
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

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router