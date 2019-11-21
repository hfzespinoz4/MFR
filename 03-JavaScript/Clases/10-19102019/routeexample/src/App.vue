<template>
  <div>
    <header>
      <ul>
        <router-link @click="showHomePage" to="/" exact> <a>Home </a> </router-link>
        <router-link @click="showProductsPage" tag="li" to="/products" exact> <a>Products </a> </router-link>
        <router-link @click="showContactPage" tag="li" to="/contact" exact> <a>Contact</a> </router-link>
        <router-link @click="showCatalogPage" tag="li" to="/catalog" exact><a> Catalog </a></router-link>
      </ul>
    </header>
    <main>
      <router-view>
        
      </router-view>        
    </main>
  </div>
</template>

<script>
/*
import HomePage from './components/Pages/HomePage'
import ProductsPage from './components/Pages/ProductsPage'
import ContactPage from './components/Pages/ContactPage'
import CatalogPage from './components/Pages/CatalogPage'
*/

export default {
  name: 'app',
 
  data: function() {
    return{
      isShowHomePage: true,
      isShowProductsPage: false,
      isShowContactPage: false,
      isShowCatalogPage: false
    };
  },

  components: {
    /*HomePage,
    ProductsPage,
    ContactPage,
    CatalogPage/*
  },

  methods: {
/*    showHomePage: function() {
      this.isShowHomePage = false;
      this.isShowProductsPage = false;
      this.isShowContactPage = false;
    },
    
    showProductsPage: function(){
      this.isShowProductsPage = true;
      this.isShowHomePage = false;
      this.isShowContactPage = false;
    },

    showContactPage: function(){
      this.isShowContactPage = true;
      this.isShowProductsPage = false;
      this.isShowHomePage = false;
    },

    showCatalogPage: function(){
      this.isShowHomePage = false;
      this.isShowProductsPage = false;
      this.
    }

*/
  } 
}
</script>

<style>
:root{
  background-color: rgb(2, 81, 100);
}

ul{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

a{
  text-decoration-style: none;
}

p{
  font-size: 12px;
  color: black;
}

</style>
