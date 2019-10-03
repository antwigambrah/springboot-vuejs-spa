import Vue from "vue"
import Router from 'vue-router'
import Home  from "../components/home"
import Login from "../components/pages/auth/login"

Vue.use(Router);

const router=new Router({
    mode:'history',
    routes:[
        {
            path:'/login',
            component:Login,
            name:'login'
        },
        {
            path:'/',
            component:Home,
            name:'home'
        },

    ]
});

export  default router;