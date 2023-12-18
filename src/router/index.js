import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue'
import login from '@/views/login.vue'
import detail from '@/views/detail.vue'
import cart from '@/views/cart.vue'
import overzicht from '@/views/overzicht.vue'
import checkout from '@/views/checkout.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', component: home},
        {path: '/login', component: login},
        {path: '/detail/:id', component: detail},
        {path: '/cart', component: cart},
        {path: '/overzicht', component: overzicht},
        {path: '/checkout', component: checkout}
    ]
})
export default router