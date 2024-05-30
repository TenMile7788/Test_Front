import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import PerformanceDetail from "@/pages/performances/PerformanceDetail.vue"
import PerformanceBook from "@/pages/performances/PerformanceBook.vue"
import MyBookList from "@/pages/mybook/MyBookList.vue"
import MyBookDetail from "@/pages/mybook/MyBookDetail.vue"
import Login from "@/pages/Login.vue"
import SignUp from "@/pages/SignUp.vue"

import ConcertMain from "@/pages/category/ConcertMain.vue"
import PlayMain from "@/pages/category/PlayMain.vue"
import ClassicMain from "@/pages/category/ClassicMain.vue"
import MusicalMain from "@/pages/category/MusicalMain.vue"

import EventMain from "@/event/EventMain.vue"
import EventDetail from "@/event/EventDetail.vue"
import EventBook from "@/event/EventBook.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/concert", component: ConcertMain},
    { path: "/play", component: PlayMain},
    { path: "/classic", component: ClassicMain},
    { path: "/musical", component: MusicalMain},
    { path: "/performances/:id", component: PerformanceDetail },
    { path: "/performances/:id/book", component: PerformanceBook },
    { path: "/my/books", component: MyBookList},
    { path: "/my/books/:id", component: MyBookDetail },
    { path: "/login", component: Login},
    { path: "/signup", component: SignUp},
    { path: "/event", component: EventMain},
    { path: "/event/:id", component: EventDetail},
    { path: "/event/:id/book", component: EventBook}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router