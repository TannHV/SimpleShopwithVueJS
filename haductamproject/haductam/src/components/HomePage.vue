<template>
    <div class="container">
        <div class="row">
            <div class="col-9"></div>
            <div class="col-3 mt-5">
                <select class="form-select" v-model="sortOrder" @change="sortProducts">
                    <option value="normal">Normal</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>
        </div>
        <div class="row box-product">
            <Product v-for="product in  paginatedProducts" :product="product" :key="product.id" />
        </div>
        <Page />
    </div>
</template>

<script>
import Product from './Product.vue';
import Page from "./Page.vue";

import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    name: "HomePage",
    data() {
        return {
            sortOrder: 'normal'
        }
    },
    mounted() {
        document.title = "Home page"
    },
    components: {
        Product,
        Page,
    },
    computed: {
        ...mapState(["currentPage", "pageSize", "sortPrice"]),
        ...mapGetters(["filteredProducts", "totalPages", "paginatedProducts"]),
    },
    methods: {
        ...mapMutations(['sortProductsByPrice']),
        sortProducts() {
            this.sortProductsByPrice(this.sortOrder);
        }
    }

}
</script>

<style>
.box-product {
    margin: 30px 0px;
}
</style>
