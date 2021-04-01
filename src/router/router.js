import vueRouter from 'vue-router';
import routes from './routes';
import Vue from 'vue';


Vue.use(vueRouter);

const router = new vueRouter({
    routes: routes,
    mode: 'history'
})

console.log("router", router)
export default router;

