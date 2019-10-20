<template>
  <div>
    <main>
      <HomePage v-if="isShowHomePage"/>
      <ProductsPage v-if="isShowProductsPage"/>
      <ContactPage v-if="isShowContactPage"/>
    </main>
  </div>
</template>

<script>
import HomePage from './components/Pages/HomePage'
import ProductsPage from './components/Pages/ProductsPage'
import ContactPage from './components/Pages/ContactPage'


export default {
  name: 'app',
 
  data: function() {
    return{
      isShowHomePage: false,
      isShowProductsPage: false,
      isShowContactPage: true,
    };
  },

  components: {
    HomePage,
    ProductsPage,
    ContactPage
  },

  methods: {
    showHomePage: function() {
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
