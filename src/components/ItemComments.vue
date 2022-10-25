<script>
import axios from 'axios'
    export default{
        beforeMount: function(el) {
            if(this?.id){
                axios.get("http://127.0.0.1:5173/stub/comments.json").then( response => {
                    const filteredArray = response.data.list.filter(
                        item => item.product_id == this?.id 
                    )
                    this.dataLength = filteredArray.length
                    this.data = filteredArray
                })
            }
        },
        data() {
            return {
                dataLength: null,
                data: null
            }
        },
        setup() {
            return {
            }
        },
        props: ['id']
    } 
</script>
<template>
    <div>
        <h2>
            Коментарии({{dataLength}})
        </h2>
        <ul>
            <li v-for="comment in data">
                <div>
                    <b>{{comment.author}}</b>
                    <p>{{comment.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
div{
    color: white;
    width: 100%;
}
</style>