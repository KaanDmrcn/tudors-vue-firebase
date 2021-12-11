import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product
    },
    {
        path: '/ProductDetailPage/:id',
        name: 'ProductDetailPage',
        component: ProductDetailPage
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router