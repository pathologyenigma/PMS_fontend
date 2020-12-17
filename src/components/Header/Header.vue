<template>
<div class="header">
    <div class="navbar">
        <div class="container flex">
            <h1 class="logo">{{title}}</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="docs.html">Docs</a></li>
                </ul>
            </nav>
        </div>
    </div>
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
    .navbar{
    background-color: var(--primary-color);
    color: #fff;
    height: 70px; 
    
}
.navbar ul{
    display: flex;
}

.navbar a{
    color: #fff;
    padding: 10px;
    margin: 0 5px;
}

.navbar a:hover{
    border-bottom: 2px #fff solid;
}

.navbar .flex{
    justify-content: space-between;
}
</style>