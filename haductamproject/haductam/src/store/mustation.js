const mutations = ({
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    changeFilterValue(state, data) {
        state.searchValue = data
        console.log(state.searchValue);
    },
    addtoCart(state, data) {
        // tạo object
        var newData = {
            ...data,
            quantily: 1,
        };
        // tìm trong giỏ hàng, hàng có rồi
        var isAdd = state.cart.find((item) =>
            item.id == data.id ? (item.quantily += 1, item.quantity--) : ""
        );
        // isAdd=''
        isAdd ? "" : state.cart.push(newData);
    },
    sortProductsByPrice(state, sortOrder) {
        if (sortOrder === 'lowToHigh') {
            state.products.sort((a, b) => a.discount - b.discount);
        } else if (sortOrder === 'highToLow') {
            state.products.sort((a, b) => b.discount - a.discount);
        } else {
            state.products.sort((a, b) => a.id - b.id);
        }
    },
    handlePlus(state, id) {
        state.cart.find(item =>
            item.id == id ? (item.quantily++, item.quantity--) : ''
        )
    },
    handleMinus(state, id) {
        const item = state.cart.find(item => item.id === id);
        if (item) {
            item.quantily -= 1, item.quantity++;
            if (item.quantily === 0) {
                state.cart = state.cart.filter(item => item.id !== id);
            }
        }
    },
    removeItem(state, id) {
        state.cart.find((item, index) =>
            (item.id == id) ? state.cart.splice(index, 1) : ''
        )
    },
    removeAll(state) {
        state.cart = [];
    },
    // update the current page
    setCurrentPage(state, page) {
        state.currentPage = page;
    },
    // update the list of products
    setProducts(state, products) {
        state.products = products;
    },
    // update the page size
    setPageSize(state, size) {
        state.pageSize = size;
    },
    // update the selected price filter
    setSelectedPrice(state, price) {
        state.selectedPrice = price;
    },
});
export default mutations;