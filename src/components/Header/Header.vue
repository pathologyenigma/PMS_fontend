<template>
<div class="header">
    <h1>header</h1>
    <p>{{title}}</p>
</div>
</template>
<script>

export default {
    props:['title'],
    data(){
        return {
            
        }
    },
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: inherit;
    }
    h1{
        text-align: center;
    }
</style>