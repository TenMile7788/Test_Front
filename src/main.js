import { createApp } from 'vue'
import App from './App.vue'
import router from "@/scripts/router"
import store from "@/scripts/store"
import VueCookies from "vue-cookies";

createApp(App).use(router).use(store).use(VueCookies).mount('#app')