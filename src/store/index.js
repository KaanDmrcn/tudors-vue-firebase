import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
    state: {
        products: [],
        mycart: [],
        slides: [{
                id: 0,
                src: "https://www.tudors.com/Uploads/Slider/-497.jpg?t=20211208153905",
            },
            {
                id: 1,
                src: "https://www.tudors.com/Uploads/Slider/ds01-461.jpg?t=20211209145609",
            },
            {
                id: 2,
                src: "https://www.tudors.com/Uploads/Slider/maksimum-49-99-tl-urunler-499.jpg?t=20211209181332",
            },
            {
                id: 3,
                src: "https://www.tudors.com/Uploads/Slider/ds02-462.jpg?t=20211126101429",
            },
            {
                id: 4,
                src: "https://www.tudors.com/Uploads/Slider/qwd-487.jpg?t=20211104085534",
            },
        ]
    },




    getters: {
        getTodoById: (state) => (id) => {
            return state.products.find(products => products.id === id)
        },
        getSrcId: (state) => (id) => {
            return state.slides.find(slides => slides.id === id)
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