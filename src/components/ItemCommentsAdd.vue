<script>
    export default {
        data() {
            return{
                comments: [],
                commString: null
            }
        },
        methods: {
            addComment(){
                let comm = {
                    text: this.commString
                } 
                this.comments.push(comm)
            }
        },
        setup(){
            return{

            }
        }
    }
</script>
<template>
    <div class="comments-blog">
        <div class="add-comment">
            <input type="text" placeholder="введите свой отзыв" v-model="commString">
            <button @click="addComment">
                Добавить
            </button>
        </div>
        <div class="comments">
            <div v-for="comm in comments" class="comment-block">
                <span>
                    {{comm.text}}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    button{
        margin-left: 15px;
    }
    .add-comment{
        display: flex;
    }
    .comments{
        color: white
    }
</style>