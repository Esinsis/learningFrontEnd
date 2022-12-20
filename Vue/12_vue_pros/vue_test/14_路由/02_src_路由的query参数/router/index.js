import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import Messages from "@/pages/Messages";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

export default new VueRouter({
    routes: [
        {
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
                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})