<template>
    <div class="container mt-4 mb-4 text-left">
        <h1>Detail Product</h1>
        <div class="card">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1">
                                <img :src="imageProduct" :alt="product.image" />
                            </div>
                        </div>
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title"> {{ product.name }} </h3>
                        <p class="product-description"> {{ product.description }} </p>
                        <h5>Status: <span class="text-success" v-if="productStock > 1">In stock</span> <span class="text-danger" v-else>Out of stock</span> </h5>
                        <!-- <h6>Quantity: {{ productStock-1 }}</h6> -->
                        <div class="row pl-3">
                            <div class="col-4 p-0 ">
                                <h4 class="price"> Price: {{ formatPrice(product.discount) }}<sup><u>đ</u></sup>
                                </h4>
                            </div>
                            <div class="col-3  p-0 text-muted text-decoration-line-through">
                                <h5 class="price">{{ formatPrice(product.price) }}<sup><u>đ</u></sup></h5>
                            </div>
                            <div class="col-2 bg-danger ml-4 p-1 giamgia"> -{{ formatPercentage(1 - (product.discount /
                                product.price)) }} </div>
                        </div>
                        <div class="action">
                            <button class="add-to-cart btn btn-success" type="button"
                                :class="{ disabled: productStock <= 1 }" @click="addtoCart(product)"> Add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
// import store from "../store/index";
export default {
    name: "DetailProduct",
    data() {
        return {
            product: {},
            imageProduct: '',
            id: null
        };
    },
    mounted() {
        this.$store.dispatch('loadProducts');
        this.id = this.$route.params.id;
        // console.log(this.$route.params.id);
        this.product = this.$store.state.products.find((item) => item.id == this.id);
        this.imageProduct = require(`@/assets/images/${this.product.image}`);
        document.title = this.product.name;
    },
    computed: {
        productStock() {
            console.log(this.$store.getters.itemQuantity(this.id));
            return this.$store.getters.itemQuantity(this.id);
        },
    },
    methods: {
        ...mapGetters(['imageRequire']),
        ...mapMutations(["addtoCart"]),
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatPercentage(value) {
            let percentage = (value * 100).toFixed(1);
            return percentage.toString().replace(".", ",") + "%";
        }
    }
};
</script>

<style scope>
/*****************globals*************/
body {
    font-family: 'open sans';
    overflow-x: hidden;
}

img {
    max-width: 100%;
}

div.giamgia {
    color: white;
    font-weight: 700;
    font-size: 13px;
    text-align: center;
    border-radius: 25%;
    background-color: #ff0000 !important;
}

.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
    border: none;
    margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
    max-width: 100%;
    display: block;
}

.preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0;
}

.tab-content {
    overflow: hidden;
}

.tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
}

.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
}

@media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.product-title,
.sizes,
.colors {
    text-transform: UPPERCASE;
    font-weight: bold;
}

.price {
    font-weight: bold;
}

.checked,
.price span {
    color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
    margin-bottom: 15px;
}

.product-title {
    margin-top: 0;
}

.size {
    margin-right: 10px;
}

.size:first-of-type {
    margin-left: 40px;
}

.color {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px;
}

.color:first-of-type {
    margin-left: 20px;
}

.add-to-cart,
.like {
    background: #ff9f1a;
    padding: 1.2em 1.5em;
    border: none;
    text-transform: UPPERCASE;
    font-weight: bold;
    color: #fff;
    -webkit-transition: background 0.3s ease;
    transition: background 0.3s ease;
}

.add-to-cart:hover,
.like:hover {
    background: #b36800;
    color: #fff;
}

.add-to-cart {
    margin-right: 10px;
}

.not-available {
    text-align: center;
    line-height: 2em;
}

.not-available:before {
    font-family: fontawesome;
    content: '\f00d';
    color: #fff;
}

.orange {
    background: #ff9f1a;
}

.green {
    background: #85ad00;
}

.blue {
    background: #0076ad;
}

.tooltip-inner {
    padding: 1.3em;
}

@-webkit-keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>
