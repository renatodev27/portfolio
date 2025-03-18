<template>
  <div class="background-container">
    <header>
        <div class="content">
            <h2 class="mb-0 name">RENATO</h2>
            <h1 class="lastname">RAMOS PARETTO</h1>
            <h4 class="mt-3">- Desarrollador Fullstack -</h4>
            <a href="javascript:void(0)" class="download-btn" @click="downloadFile()">DESCARGAR CV</a>
        </div>
    </header>
  </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
            fileUrl: '/src/cv/CV_Renato_Ramos.docx',
            fileName: 'CV_Renato_Ramos.docx'
        }  
    },
    methods: {
        redirectLink(number) {
            this.$emit('setLink', number);
        },
        downloadFile() {
            const link = document.createElement('a');
            link.href = this.fileUrl;
            link.target = '_blank';
            link.download = this.fileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },
    mounted() {
        this.redirectLink(1)
    }
}
</script>
