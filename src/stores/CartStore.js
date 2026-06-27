import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            {id: 1, name: 'Laptop', price: 959, image: '💻'},
            {id: 2, name: 'Phone', price: 699, image: '📱'},
            {id: 3, name: 'Headphones', price: 259, image: '🎧'},
            {id: 4, name: 'Keyboard', price: 149, image: '⌨️'},
            {id: 5, name: 'Mouse', price: 89, image: '🖱️'},
            {id: 6, name: 'Monitor', price: 599, image: '🖥️'},
        ],
        cart: [],
    }),

    getters: {
        totalItems: (state) => state.cart.reduce((sum, item) => sum + item.qty, 0),
        totalPrice: (state) => state.cart.reduce((sum, item) => sum + item.price* item.qty, 0),
    },
    actions: {
        addToCart(product) {
            const existing = this.cart.find(i => i.id === product.id)
            if (existing) {
                existing.qty++
            }else{
                this.cart.push({...product, qty: 1})
            }
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(i => i.id !== productId)
        },
        clearCart() {
            this.cart = []
        },
    },
})