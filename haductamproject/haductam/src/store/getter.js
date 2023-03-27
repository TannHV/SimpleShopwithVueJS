const getter = ({
    filteredProducts: (state) => {
        let filtered = state.searchValue
            ? state.products.filter((product) =>
                product.name.toLowerCase().includes(state.searchValue.toLowerCase())
            )
            : state.products;
        return filtered;
    },
    paginatedProducts: (state, getters) =>
        getters.filteredProducts.slice(
            (state.currentPage - 1) * state.pageSize,
            state.currentPage * state.pageSize
        ),
    totalPages: (state, getters) =>
        Math.ceil(getters.filteredProducts.length / state.pageSize)
    ,
    getTotal(state) {
        let total = 0;
        state.cart.forEach(item => total += item.discount * item.quantily);
        return total;
    },
    getProductDetailById: (state) => (id) => {
        console.log(id);
        let articles_arr = state.products;
        articles_arr.forEach(
            item => {
                if (item.id == id) {
                    console.log(item);
                    return item
                }
            }
        )
    },
    itemQuantity: (state) => (itemId) => {
        const cartItem = state.cart.find((item) => item.id === itemId);
        return cartItem ? cartItem.quantity : 15;
    },
})
export default getter;