import { createWebHistory, createRouter } from "vue-router";   
import HelloWorld from "../../components/HelloWorld.vue";
import NewsList from "../../components/NewsList.vue";
//создаем роутинг(инструкцию) ((делаем конфигурацию для показа определенного компонента по определенному пути))
const routes = [
  {
    path: '/',              //путь
    name: 'home',           //название
    component: HelloWorld   //сам отображаемый компонент
  },
  {
    path: '/news',
    name: 'News',
    component: NewsList
  }
];
//создали сам обьект роутинга 
const router = createRouter({
  history: createWebHistory(),  //
  routes: routes,               //передаем в поле обьектов роутинга, массив с разными роутингами
});

//exporting router

export default router;