<script>
import axios from 'axios'
import Loader from './Loader.vue'
export default {
    beforeMount: function (el) {
        //сделаем запрос запрос к новостям
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                this.productList = response.data
            })
    },
    data() {
        return {
            title: 'Список товаров',
            productList: null,
        }
    },
    setup() {
        return {

        }
    },
    components: {Loader}
}
</script>
<template>
    <Loader v-if="productList == null" />
    <div v-if="productList != null" class="product-list">
        <div  class="page-title">
            <h1>{{title}}</h1>
        </div>
        <section>
            <ul class="products">
                <li class="product__item" v-for="product in productList" v-bind:id="product.id">
                    <router-link v-bind:to="'/product/' + product.id">
                        <img class="product__item__img" v-bind:src="product.image" v-bind:alt="product.title">
                        <span class="product__item__title">Название: {{product?.title}}</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>
<style scoped>
ul{
    list-style: none;
}
.product__item{
    background-color: rgb(255, 255, 255);
    padding: 5px;
    border: 2px rgba(52, 48, 48, 0.492) solid;
    margin-bottom: 10px;
    transition: background-color 1s;
    border-radius: 10px;
}
.product__item a{
    display: flex;
    align-items: center;
    color: rgb(46, 46, 46);
}
.product__item__img{
    max-width: 50px;
    margin-right: 20px;
}
.product__item__title{
    font-size: 22px;
}
.product__item:hover {
    border: 2px solid  rgb(255, 35, 35);
}

</style>
