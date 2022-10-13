import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'

import homeBg from '../../static/assets/background.jpg'
import aboutBg from '../../static/assets/background2.jpg'
import skillsBg from '../../static/assets/background3.jpg'
import experienceBg from '../../static/assets/background4.jpg'
import portfolioBg from '../../static/assets/background5.jpg'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { bgImage: homeBg }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { bgImage: aboutBg }
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skills,
        meta: { bgImage: skillsBg }
    },
    {
        path: '/experience',
        name: 'experience',
        component: Experience,
        meta: { bgImage: experienceBg }
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
        meta: { bgImage: portfolioBg }
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})
