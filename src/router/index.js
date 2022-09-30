import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'


Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skills
    },
    {
        path: '/experience',
        name: 'experience',
        component: Experience
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})
