<script>
/* 
    Список новостей вывести
    Сделать  переход по клику на конкретную новость
*/
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios' 
     export default {
        mounted: function(el) {
            //получаем гет запросы (аналог window.href)
            //const route = useRoute();
            const router = useRouter();
            const id = router.currentRoute.value.params.id
            //запрос через библиотеку axios
            const url = 'https://fakestoreapi.com/products/' + id
            axios.get(url)
            .then( (response) => { //действия после успешного ответа от серврера (response = response.Text)
                this.data = response.data
            })
        },
        data() {
            return {
                data: null
            }
        },
        setup() {
            return {
                
            }
        }
    }
</script>

<template>
    <h1>Новость {{data?.title}}</h1>
</template>

<style scoped>

</style>