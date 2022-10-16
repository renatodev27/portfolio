<template>
    <div>
        <navbar :menu="link" ref="navbar" @checkNavbar="getNavbarStatus"/>
        <div @click="bodyClick">
            <transition name="slide-fade">
                <router-view @setLink="getLink"/>
            </transition>
        </div>

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
            link: undefined,
            open: undefined
        }
    },
    methods: {
        getLink(link) {
            this.link = link
        },
        bodyClick() {
            if (this.open) this.$refs.navbar.closeMenu();
        },
        getNavbarStatus(result) {
            this.open = result;
        }
    }
}
</script>
