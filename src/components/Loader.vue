<script>
</script>
<template>
    <div class="loader">
        <div class="loader__text">Загрузка...</div>
    </div>
</template>
<style scoped>
.loader{
    position:fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader__text{
    font-size: 24px;
    padding: 20px;
    background-color: black;
    border-radius: 30px;
    color: white;
    box-shadow: 5px 5px 5px grey;
}
</style>