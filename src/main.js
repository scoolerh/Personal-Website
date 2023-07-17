import { createApp } from 'vue'
import App from './App.vue'
import AboutMePage from './components/AboutMePage.vue'
import ResumePage from './components/ResumePage.vue'
import ReadingPage from './components/ReadingPage.vue'
import ContactPage from './components/ContactPage.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHistory } from 'vue-router'

//eslint-disable vue/multi-word-component-names

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AboutMePage },
        { path: '/resume', component: ResumePage },
        { path: '/reading', component: ReadingPage },
        { path: '/contact', component: ContactPage }
    ]
})

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(vuetify).use(router).mount('#app')
