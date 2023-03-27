import axios from "axios";
import APIURL from "../constraint.js";

const actions = ({
    async fetchProducts({ commit }) {
        const response = await axios.get("http://localhost:8080/");
        const products = response.data;
        commit("setProducts", products);
    },
    selectPrice({ commit }, price) {
        commit("setSelectedPrice", price);
    },
    loadProducts({ commit }) {
        axios
            .get(`${APIURL}/products`)
            .then(res => res.data)
            .then(products => {
                commit('SET_PRODUCTS', products)
            })
    }
})
export default actions;