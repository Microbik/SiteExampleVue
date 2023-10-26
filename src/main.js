import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from "vue-router"

import TheChat from "./components/Chat.vue"
import TheHome from "./components/Home.vue"
import TheApi from "./components/Api.vue"


const routes = [
    {path: '/', name: 'TheHome', component:TheHome},
    {path: '/chat', name: 'TheChat', component:TheChat},
    {path: '/api', name: 'TheApi', component:TheApi}
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount("#app")