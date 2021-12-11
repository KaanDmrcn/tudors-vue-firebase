import { createStore } from 'vuex'

export default createStore({
    state: {
        temp: 2,
        products: [{
                id: 1,
                name: "Slim Fit Dar Kesim Viskon Pamuk Uzun Kol Gömlek",
                indirimlifiyat: "₺99,99",
                eskifiyat: "₺199,99",
                indirim: "%49İndirim",
                src: "https://www.tudors.com/Uploads/UrunResimleri/buyuk/slim-fit-dar-kesim-viskon-pamuk-cicekl-692606.jpg",
                src2: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-d5c9a6.jpg",
                src3: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-2af-4b.jpg",
                src4: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-330cd5.jpg"
            },
            {
                id: 2,
                name: "Slim Fit Dokuma Hakim Yaka Düz Acık Gömlek",
                indirimlifiyat: "₺79,99",
                eskifiyat: "₺159,99",
                indirim: "%44İndirim",
                src: "https://www.tudors.com/Uploads/UrunResimleri/buyuk/slim-fit-short-slv-crew-neck-cosmos-go-47-8fe.jpg",
                src2: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-short-slv-crew-neck-cosmos-go-2e-4af.jpg",
                src3: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-short-slv-crew-neck-cosmos-go-e79883.jpg",
                src4: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-short-slv-crew-neck-cosmos-go-3026-9.jpg"
            },
            {
                id: 3,
                name: "Slim Fit Dar Kesim Viskon Pamuk Uzun Kol Gömlek",
                indirimlifiyat: "₺99,99",
                eskifiyat: "₺199,99",
                indirim: "%49İndirim",
                src: "https://www.tudors.com/Uploads/UrunResimleri/buyuk/slim-fit-dar-kesim-viskon-pamuk-cicekl-9da1-4.jpg",
                src2: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-c67-9e.jpg",
                src3: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl--56332.jpg",
                src4: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-2d8-0d.jpg"
            },
            {
                id: 4,
                name: "Slim Fit Dar Kesim Viskon Pamuk Uzun Kol Gömlek",
                indirimlifiyat: "₺99,99",
                eskifiyat: "₺199,99",
                indirim: "%49İndirim",
                src: "https://www.tudors.com/Uploads/UrunResimleri/buyuk/slim-fit-dar-kesim-viskon-pamuk-cicekl-4451-8.jpg",
                src2: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-4cb3-4.jpg",
                src3: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl--a62e-.jpg",
                src4: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-dar-kesim-viskon-pamuk-cicekl-b-e906.jpg"
            },
            {
                id: 5,
                name: "Slim Fit Dar Kesim Baskılı Kısa Kol Erkek Gömlek",
                indirimlifiyat: "₺69,99",
                eskifiyat: "₺139,99",
                indirim: "%49İndirim",
                src: "https://www.tudors.com/Uploads/UrunResimleri/buyuk/slim-fit-short-slv-fito-gomlek-slim-fi-48a2-b.jpg",
                src2: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-short-slv-fito-gomlek-slim-fi-5c-b00.jpg",
                src3: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-short-slv-fito-gomlek-slim-fi--4c6e-.jpg",
                src4: "https://www.tudors.com/Uploads/UrunResimleri/thumb/slim-fit-short-slv-fito-gomlek-slim-fi-cb30-4.jpg"
            }
        ]
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.products.find(products => products.id === id)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})