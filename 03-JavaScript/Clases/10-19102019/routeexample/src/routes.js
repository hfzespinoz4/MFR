import HomePage from './components/Pages/HomePage.vue';
import ContactPage from './components/Pages/ContactPage.vue';
import ProductsPage from './components/Pages/ProductsPage.vue';
import CatalogPage from './components/Pages/CatalogPage.vue';
import Product from './components/Elements/Product.vue';
import NotFoundPage from './components/Pages/NotFoundPage.vue';

export default [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductsPage },
    { path: '/contact', component: ContactPage },
    { path: '/catalog', component: CatalogPage},
    { path: '/product/:id', component: Product},
    { path: '*', component: NotFoundPage }
  ];