<template>
    <div class="background-container">
        <section>
            <div class="about-me">
                <img src="../assets/profile_picture.jpg" class="mobile-profile-pic">
                <div class="text-content">
                    <h1>Soy Renato</h1>
                    <h5 class="profesion">Desarrollador web y aplicaciones</h5>
                    <p class="mt-3">Hola! soy Renato y tengo 29 años, soy egresado del Instituto Superior Tecnológico IDAT con grado de Técnico de la carrea Computación e Informática en camino a obtener la licenciatura de Ingeniería de Software, 
                        cuento con un amplia experciencia en el desarrollo web y cuento con muchos proyectos realizados en diversas tecnologías.</p>
                </div>
                <img src="../assets/profile_picture.jpg" class="profile-picture">
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    name: 'about',
    components: { 
        Navbar 
    },
    methods: {
        redirectLink(number) {
            this.$emit('setLink', number);
        }
    },
    mounted() {
        this.redirectLink(2)
    }
}
</script>