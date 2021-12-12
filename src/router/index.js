import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import MyCart from '../views/MyCart.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

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
    {
        path: '/MyCart',
        name: 'MyCart',
        component: MyCart
    },
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router