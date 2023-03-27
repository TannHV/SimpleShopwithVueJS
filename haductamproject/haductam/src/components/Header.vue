<template>
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-primary bg-primary">
        <div class="container">
            <a class="navbar-brand text-white" href="/">
                <img :src="require('@/assets/logo.png')" class="p-0" alt="" width="50"> Vue BShop </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link text-white" to="/">
                            <i class="fa fa-home"></i> Home </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/about">
                            <i class="fa fa-info-circle"> </i>About </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/shopping-cart">
                            <i class="fa fa-shopping-cart">
                                <span class="badge badge-danger">{{ cart.length }}</span>
                            </i> Cart </router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"
                        v-model="search" @input="changeFilterValue(search)">
                    <!-- <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button> -->
                </form>
            </div>
        </div>
    </nav>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
    name: 'HeaderPage',
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState(['cart', 'products'])
    },
    methods: {
        ...mapMutations(['changeFilterValue']),
    },
    mounted() {
        this.$store.dispatch('loadProducts')
    }
}
</script>

<style scope>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.navbar-icon-top .navbar-nav .nav-link>.fa {
    position: relative;
    width: 36px;
    font-size: 24px;
}

.navbar-icon-top .navbar-nav .nav-link>.fa>.badge {
    font-size: 0.75rem;
    position: absolute;
    right: 0;
    font-family: sans-serif;
}

.navbar-icon-top .navbar-nav .nav-link>.fa {
    top: 3px;
    line-height: 12px;
}

.navbar-icon-top .navbar-nav .nav-link>.fa>.badge {
    top: -10px;
}

@media (min-width: 576px) {
    .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
        text-align: center;
        display: table-cell;
        height: 70px;
        vertical-align: middle;
        padding-top: 0;
        padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link>.fa {
        display: block;
        width: 48px;
        margin: 2px auto 4px auto;
        top: 0;
        line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link>.fa>.badge {
        top: -7px;
    }
}

@media (min-width: 768px) {
    .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
        text-align: center;
        display: table-cell;
        height: 70px;
        vertical-align: middle;
        padding-top: 0;
        padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link>.fa {
        display: block;
        width: 48px;
        margin: 2px auto 4px auto;
        top: 0;
        line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link>.fa>.badge {
        top: -7px;
    }
}

@media (min-width: 992px) {
    .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
        text-align: center;
        display: table-cell;
        height: 70px;
        vertical-align: middle;
        padding-top: 0;
        padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link>.fa {
        display: block;
        width: 48px;
        margin: 2px auto 4px auto;
        top: 0;
        line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link>.fa>.badge {
        top: -7px;
    }
}

@media (min-width: 1200px) {
    .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {
        text-align: center;
        display: table-cell;
        height: 70px;
        vertical-align: middle;
        padding-top: 0;
        padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link>.fa {
        display: block;
        width: 48px;
        margin: 2px auto 4px auto;
        top: 0;
        line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link>.fa>.badge {
        top: -7px;
    }
}
</style>
