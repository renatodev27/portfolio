<template>
    <div>
        <navbar :menu="link" ref="navbar"/>
        <transition name="slide-fade">
            <router-view @setLink="getLink" />
        </transition>

      <footbar />
    </div>
</template>

<script>
import Footbar from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: { Footbar, Navbar },
    data() {
        return {
            link: undefined
        }
    },
    methods: {
        getLink(link) {
            this.link = link
        }
    }
}
</script>
