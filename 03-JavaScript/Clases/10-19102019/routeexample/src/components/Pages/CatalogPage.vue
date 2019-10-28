<template>
    <div>
        <h1>Catalog</h1>
        <p>Input the product, then click on search</p>
        <label for="id-products-search"></label>
        <input type="text" id="products-search">
        <button class="btn btn-form btn-primary"> Search </button>
        <hr>
        <Product/>
        <Footermsg/>
    </div>
</template>
<script>
import Footermsg from '../Elements/Footermsg'
import Product from '../Elements/Product'

export default {
    name: "CatalogPage",
    components:{
        Footermsg,
        Product
    },
    data: () => {
        return {
            SearchProduct: "",
            productsList: [
                {
                    id: 0,
                    name: "hp-5",
                    description:"A Computer"
                },
                {
                    id: 1,
                    name: "hp printer",
                    description: "hp printer"
                },
                {
                    id: 2,
                    name: "Magic Beans",
                    description: "Caution, do not eat, yo can grow a plant the size of a scratch in the stomach"
                }
            ]
        }
    },

    
    
}
</script>
<style>
    p{
        color: black;
    }
</style>