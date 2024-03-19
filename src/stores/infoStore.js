import { defineStore } from 'pinia'
import apiProducts from '@/helpers/api/api'

export const useInfoStore = defineStore('info', {
    state: () => ({
        info: null,
    }),
    actions: {
        async getInfo(id) {
            try {
                const res = await apiProducts.getInfo(id);
                this.info = res
            } catch (error) {
                console.error(error);
            }
        }
    },
    persist: true
}

)
