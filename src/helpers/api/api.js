import axiosProducts from "./axiosProducts";

const apiProducts = {
  getProducts(limit, start, search) {
    const url = `products/search?q=${search}&limit=${limit}&skip=${start}`
    return axiosProducts.get(url);
  },
  getInfo(id) {
    const url = `products/${id}/`
    return axiosProducts.get(url)
  }
}

export default apiProducts