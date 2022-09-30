<template>
    <div>
      <transition name="slide-fade">
        <router-view/>
      </transition>

      <footbar />
    </div>
</template>

<script>
import Footbar from './components/Footer.vue'

export default {
    name: 'App',
    components: { Footbar }
}
</script>
