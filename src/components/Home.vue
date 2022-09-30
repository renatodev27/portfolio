<template>
  <div class="background-container one">
    <navbar :menu="1" />
    <header>
        <div class="content">
            <h2 class="mb-0 name">RENATO</h2>
            <h1 class="lastname">RAMOS PARETTO</h1>
            <h4 class="mt-3">- Desarrollador -</h4>
            <a href="src/cv/CV Renato Ramos.docx" class="download-btn" download>DESCARGAR CV</a>
        </div>
    </header>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    name: 'home',
    components: { Navbar }
}
</script>
