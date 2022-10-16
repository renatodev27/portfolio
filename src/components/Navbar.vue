<template>
    <nav>
        <button class="mobile-btn" @click="openMenu" :class="isOpen ? 'active' : ''">
            <i class="fas fa-bars"></i>
        </button>
        <ul class="desktop-menu" :class="isOpen ? 'menu-open' : ''">
            <li class="mobile-menu-title">
                <h5>MENU</h5>
                <hr>
            </li>
            <li> 
                <a class="d-flex justify-content-evenly me-3" @click="menu !== 1 ? toLink(1) : ''" :class="menu === 1 ? 'active' : ''"> 
                    <i class="fas fa-home"></i> <span class="menu-text">Inicio</span>
                </a> 
            </li>
            <li> 
                <a class="d-flex justify-content-evenly me-3" @click="menu !== 2 ? toLink(2) : ''" :class="menu === 2 ? 'active' : ''">
                    <i class="fas fa-address-card"></i> <span class="menu-text">Sobre mi</span>
                </a> 
            </li>
            <li> 
                <a class="d-flex justify-content-evenly" @click="menu !== 3 ? toLink(3) : ''" :class="menu === 3 ? 'active' : ''"> 
                    <i class="fas fa-terminal"></i> <span class="menu-text">Tecnologías</span> 
                </a> 
            </li>
            <li> 
                <a class="d-flex justify-content-evenly" @click="menu !== 4 ? toLink(4) : ''" :class="menu === 4 ? 'active' : ''">
                    <i class="fas fa-file-signature"></i> <span class="menu-text">Experiencia</span> 
                </a> 
            </li>
            <li> 
                <a class="d-flex justify-content-evenly" @click="menu !== 5 ? toLink(5) : ''" :class="menu === 5 ? 'active' : ''">
                    <i class="fas fa-briefcase"></i> <span class="menu-text">Portfolio</span> 
                </a> 
            </li>
            <li class="mobile-cv">
                <a href="src/cv/CV Renato Ramos.docx" class="download-btn" download>DESCARGAR CV</a>
            </li>
        </ul>
        <button class="close-menu" @click="closeMenu" :class="isOpen ? 'active' : ''">
            <i class="fas fa-times"></i>
        </button>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    props: {
        menu: {
            type: Number,
            required: false,
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toLink(menu) {

            switch (menu) {
                case 1 : this.$router.push({ name: 'home' }); break;
                case 2 : this.$router.push({ name: 'about' }); break;
                case 3 : this.$router.push({ name: 'skills' }); break;
                case 4 : this.$router.push({ name: 'experience' }); break;
                case 5 : this.$router.push({ name: 'portfolio' }); break;
            }
        },
        openMenu() {
            this.isOpen = true;
        },
        closeMenu() {
            this.isOpen = false;
        }
    },
    created() {
        this.$emit('checkNavbar', false)
    }
}
</script>