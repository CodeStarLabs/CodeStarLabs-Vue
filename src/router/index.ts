import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Services from '../views/Sroducts.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        }
    ]
})

export default router