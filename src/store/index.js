import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
    state: {
        products: [],
        özellikler: []
    },




    getters: {
        getTodoById: (state) => (id) => {
            return state.products.find(products => products.id === id)
        },


    },




    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        }



    },
    actions: {
        loadProducts({ commit }) {
            axios
                .get('http://localhost:8080/api/products')
                .then(r => r.data)
                .then(products => {
                    commit('SET_PRODUCTS', products)
                })
        }

    },
    modules: {}
})