import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import Messages from "@/pages/Messages";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {title: 'ABOUT'}
        },
        {
            path: '/home',
            component: Home,
            meta: {title: 'HOME'},
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: 'NEWS'}
                },
                {
                    path: 'messages',
                    component: Messages,
                    meta: {isAuth: true, title: 'MESSAGES'},
                    children: [
                        {
                            name: 'detail',
                            /*
                             * 当时用<router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
                             * 写法时， 在path 中需要使用占位符，以使router 知道哪些是参数哪些是真实的path
                             */
                            path: '/detail/:id/:title',
                            // path: 'detail',
                            // path: 'detail',  // 对象方式传参时不需要占位符
                            component: Detail,
                            meta: {isAuth: true, title: 'DETAIL'},
                            // props第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Details 组件，
                            // path 中需要参数占位符
                            // props: {id: 1, title: 'Hello'}

                            // props第二种写法，值为布尔值，若为布尔值，就会把该路由组件收到的所有的params参数，
                            // 以props的形式传给Details组件, path 中需要参数占位符
                            // props: true

                            // props的第三种写法，值为函数, params 和 query 两种都支持
                            props($route) {
                                // params 写法
                                return {id: $route.params.id, title: $route.params.title}
                                // query 写法
                                // return {id: $route.query.id, title: $route.query.title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    if (to.meta.isAuth) { // 是否需要鉴权
        if(localStorage.getItem('school')==='atguigu'){
            next()
        }else{
            alert('学校名不对，无权限查看！')
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || 'Tyler Test'
})

export default router