import { defineStore } from 'pinia'
import apiProducts from '@/helpers/api/api'

export const useProductsStore = defineStore('products', {
  state: () => ({
    text: "Hello",
    products: null,
    total: null,
    productsAll: null,
    cartItems: []
  }),
  getters: {
    counterCartItems(state) {
      return state.cartItems.length
    }
  },
  actions: {
    async getProducts(limit = 12, skip = 0, search = "") {
      try {
        const res = await apiProducts.getProducts(limit, skip, search);
        this.products = res.products
        this.total = res.total
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },

    addToCart(product) {
      const cartId = this.cartItems?.find(item => item.id == product.id)
      const cartIndex = this.cartItems?.findIndex(item => item.id == product.id)
      if (cartId?.id == product.id) {
        this.cartItems?.splice(cartIndex, 1)
      } else {
        this.cartItems.push(product)
      }
    },

    deleteProduct(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id)
    },  

  
  },
  persist: true,
})
