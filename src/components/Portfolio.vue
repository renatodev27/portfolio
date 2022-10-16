<template>
    <div class="background-container">
        <section class="mb-5">
            <div class="proyects">
                <div class="pc-header">
                    <h2 class="text-center">Portafolio</h2>
                </div>
                <div class="content">
                    <div class="card">
                        <div class="card-body p-0">
                            <table class="table table-borderless mb-0">
                                <tr>
                                    <td class="align-middle" width="15%">
                                        <img src="../assets/proyects/ecommerce-background.jpg" class="proyect-img">
                                    </td>
                                    <td class="align-middle middle" width="55%">
                                        <h3 class="font-weight-bold mb-0">Ecommerce Web</h3>
                                        <h6 class="mb-0">Front end de un sitio web ecommerce, el diseño presenta cierta actividad con los elementos del sitio.</h6>
                                    </td>
                                    <td class="align-middle text-end">
                                        <a href="https://github.com/renatodev27/web-ecommerce-un" target="_blank" class="text-decoration-none git-link"> 
                                            <i class="fab fa-github"></i> Github
                                        </a>
                                        <button class="btn-proyect mt-3" @click="openProyect('ecommerce')">DEMO</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body p-0">
                            <table class="table table-borderless mb-0">
                                <tr>
                                    <td class="align-middle" width="15%">
                                        <img src="../assets/proyects/cash_register_background.jpg" class="proyect-img">
                                    </td>
                                    <td class="align-middle middle" width="55%">
                                        <h3 class="font-weight-bold mb-0">Caja Registradora</h3>
                                        <h6 class="mb-0">Simulación de una caja registradora, puede interactuar con los elementos al agregar productos a la compra.</h6>
                                    </td>
                                    <td class="align-middle text-end">
                                        <a href="https://github.com/renatodev27/Caja_registradora" target="_blank" class="text-decoration-none git-link"> <i class="fab fa-github"></i> Github</a>
                                        <button class="btn-proyect mt-3" @click="openProyect('cashregis')">DEMO</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body p-0">
                            <table class="table table-borderless mb-0">
                                <tr>
                                    <td class="align-middle" width="15%">
                                        <img src="../assets/proyects/calculadora-background.jpg" class="proyect-img">
                                    </td>
                                    <td class="align-middle middle" width="55%">
                                        <h3 class="font-weight-bold mb-0">Calculadora</h3>
                                        <h6 class="mb-0">Realiza operaciónes matemáticas. Suma, resta, multiplica, divide, además, digita y/o borra los números que desees integrar a la operación.</h6>
                                    </td>
                                    <td class="align-middle text-end">
                                        <a href="https://github.com/renatodev27/calculadora" target="_blank" class="text-decoration-none git-link"> <i class="fab fa-github"></i> Github</a>
                                        <button class="btn-proyect mt-3" @click="openProyect('calculadora')">DEMO</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body p-0">
                            <table class="table table-borderless mb-0">
                                <tr>
                                    <td class="align-middle" width="15%">
                                        <img src="../assets/proyects/pokedex-background.png" class="proyect-img">
                                    </td>
                                    <td class="align-middle middle" width="55%">
                                        <h3 class="font-weight-bold mb-0">Pokedéx</h3>
                                        <h6 class="mb-0">Proyecto responsive del famoso pokedex, busca tus pokemones favoritos y batalla para capturarlos.</h6>
                                    </td>
                                    <td class="align-middle text-end">
                                        <a href="https://github.com/renatodev27/pokedex" target="_blank" class="text-decoration-none git-link"> <i class="fab fa-github"></i> Github</a>
                                        <button class="btn-proyect mt-3" @click="openProyect('pokedex')">DEMO</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'portfolio',
    methods: {
        openProyect(destination) {
            switch (destination) {
                case 'ecommerce' : window.open('https://e-commerce-chi-mauve.vercel.app/');
                case 'cashregis' : window.open('https://cash-register-gilt.vercel.app/');
                case 'calculadora' : window.open('https://calculator-b4dt.vercel.app/');
                case 'pokedex' : window.open('https://pokedex-nu-snowy.vercel.app/');
            }
        },
        redirectLink(number) {
            this.$emit('setLink', number);
        }
    },
    mounted() {
        this.redirectLink(5)
    }
}
</script>