import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import Messages from "@/pages/Messages";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            name: 'detail',
                            /*
                             * 当时用<router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
                             * 写法时， 在path 中需要使用占位符，以使router 知道哪些是参数哪些是真实的path
                             */
                            path: 'detail/:id/:title',
                            // path: 'detail',  // 对象方式传参时不需要占位符
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})