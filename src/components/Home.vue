<template>
  <div class="background-container">
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

export default {
    name: 'home',
    methods: {
        redirectLink(number) {
            this.$emit('setLink', number);
        }
    },
    mounted() {
        this.redirectLink(1)
    }
}
</script>
