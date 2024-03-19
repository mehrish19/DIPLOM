import axios from "axios";

const axiosProducts = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        accept: 'application/json'
    }
})

axiosProducts.interceptors.request.use(async(config) => {
    return config   
})

axiosProducts.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    throw error
})

export default axiosProducts