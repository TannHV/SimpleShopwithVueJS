<template>
    <div class="col-lg-3 col-md-4 col-sm-6 ">
        <div class="card border-0 p-0 image-product">
            <img :src="imageRequire()" class="image img-thumbnail p-0" alt="">
            <div class="middle">
                <button class="btn btn-primary btn-block" @click="addtoCart(product)" :class="{ disabled: productStock <= 1 }">
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
                <router-link class='btn btn-danger btn-block' :to="{ name: 'DetailProduct', params: { id: product.id } }">
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                </router-link>
            </div>
        </div>
        <router-link class='sanpham-card' :to="{ name: 'DetailProduct', params: { id: product.id } }">
            <p class="text-left ten-sp pt-2">{{ product.name }}</p>
            <div class="row">
                <div class="col-3 text-dark pt-1">
                    <h5 class="gia">{{ formatPrice(product.discount) }}<sup><u>đ</u></sup></h5>
                </div>
                <div class="col-4 text-muted text-decoration-line-through pt-1">
                    <h5 class="gia">{{ formatPrice(product.price) }}<sup><u>đ</u></sup></h5>
                </div>
                <div class="col-2 bg-danger ml-4 p-1 giamgia"> -{{ formatPercentage(1 - (product.discount / product.price))
                }} </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'ProductItem',
    props: ['product'],
    computed: {
        productStock() {
            return this.$store.getters.itemQuantity(this.id);
        },
    },
    data() {
        return {
            id: this.product.id,
        };
    },
    methods: {
        ...mapMutations(['addtoCart']),
        imageRequire() {
            return require(`@/assets/images/${this.product.image}`);
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatPercentage(value) {
            let percentage = (value * 100).toFixed(1);
            return percentage.toString().replace(".", ",") + "%";
        }
    },

}
</script>

<style>
.image-product {
    position: relative;
}

.image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}

.middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    right: -8%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: right;
}

.image-product:hover .image {
    opacity: 0.3;
}

.image-product:hover .middle {
    opacity: 1;
}

a.sanpham-card {
    text-decoration: none;
    color: rgb(10, 10, 10) !important;
}

div.add-to-cart {
    display: none;
}

img:hover div.add-to-cart {
    display: block;
}

div.giamgia {
    color: white;
    font-weight: 700;
    font-size: 13px;
    text-align: center;
    border-radius: 10%;
    background-color: #ff0000 !important;
}

p.ten-sp {
    font-size: 13px !important;
    font-weight: 600;
}

h5.gia {
    font-family: Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 15px !important;
    font-weight: 700;
}
</style>
