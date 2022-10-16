<script>
import axios from 'axios' 
    export default{
        beforeMount: (el) => {
            //сделаем запрос запрос к новостям
            axios.get('https://fakestoreapi.com/products/1')
            .then( function(response){
                console.log(response)
            })
        },
        data() {
            return {
                title: 'Список новостей'
            }
        },
        setup() {
            return {

            }
        }
    }
</script>
<template>
    <h1>{{title}}</h1>
</template>
<style scoped>

</style>
