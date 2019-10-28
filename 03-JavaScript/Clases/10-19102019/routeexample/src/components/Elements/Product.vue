<template>
    <div>
        <img>
        <div>
            <span>
                <p>Id:</p>
                <p id="product-id"></p>
            </span>
            <span>
                <p>Name: </p>
                <p id="product-name"></p>
            </span>
            <p id="product-description"></p>
        </div>
        <p id="product-description"></p>
        <router-link @click="showHomePage" tag="li" to="/" exact> <a>Home </a> </router-link>
    </div>
</template>
<script>
export default {
    name: "Product",

}
</script>
<style lang="stylus">
 
</style>