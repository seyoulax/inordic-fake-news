import { createWebHistory, createRouter } from "vue-router";   
import HelloWorld from "../../components/HelloWorld.vue";
import ProductsList from "../../components/ProductsList.vue";
import ProductItem from '../../components/ProductItem.vue';
//создаем роутинг(инструкцию) ((делаем конфигурацию для показа определенного компонента по определенному пути))
const routes = [
  {
    path: '/',              //путь
    name: 'home',           //название
    component: HelloWorld   //сам отображаемый компонент
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsList
  },
  {
    path: '/product/:id',
    name: 'ProductItem',
    component: ProductItem
  }
];
//создали сам обьект роутинга 
const router = createRouter({
  history: createWebHistory(),  //
  routes: routes,               //передаем в поле обьектов роутинга, массив с разными роутингами
});

//exporting router

export default router;