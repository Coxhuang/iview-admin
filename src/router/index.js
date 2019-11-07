import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Login from '@/views/login/login'
import Test from '@/test/test'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect:"/listblog",
            children:[
                {
                    path: "/listblog",
                    component: () => import("@/components/blog_list/bloglist")
                },
                {
                    path: "/createblog",
                    component: () => import("@/components/blog_create/blogcreate")
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ]
})
