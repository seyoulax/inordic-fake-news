<script>
/* 
    Список новостей вывести
    Сделать  переход по клику на конкретную новость
*/
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios'
import ItemComments from './ItemComments.vue'
import Loader from "./Loader.vue"
     export default {
    mounted: function (el) {
        //получаем гет запросы (аналог window.href)
        //const route = useRoute();
        const router = useRouter();
        const id = router.currentRoute.value.params.id;
        //запрос через библиотеку axios
        const url = `https://fakestoreapi.com/products/${id}`;
        axios.get(url)
            .then((response) => {
            this.data = response.data;
        });
    },
    data() {
        return {
            data: null
        };
    },
    setup() {
        return {};
    },
    components: {ItemComments, Loader} 
}
</script>

<template> 
    <Loader v-if="data == null" />
    <div v-if="data != null">
        <router-link to="/products">
            <Button>Назад</Button>
        </router-link>
        <div class="page-title">
            <h1>Информация о товаре:</h1>
        </div>
        <section class="item">
            <img class="item__img" v-bind:src="data?.image" v-bind:alt="data?.title">
            <div class="item-information" v-bind:id="data?.id">
                <dl>
                    <dt>
                        Название товара: 
                    </dt>
                    <dd>
                        - {{data?.title}}
                    </dd>
                    <dt>
                        Категория товара: 
                    </dt>
                    <dd>
                        - {{data?.category}}
                    </dd>
                    <dt>
                        Цена товара($): 
                    </dt>
                    <dd>
                        - {{data?.price}}
                    </dd>
                </dl>
            </div>
            <ItemComments :id="data?.id"></ItemComments>
        </section>
    </div>
</template>

<style scoped>
    dl{
        font-size: 25px;
        color: white;
    }
    dl dt{
        margin: 10px;
        font-weight: 700;
    }
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .item__img{
        max-width: 300px;
    }
    button{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    
</style>