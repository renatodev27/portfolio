<template>
    <div class="background-container four">
        <navbar :menu="4" />
        <section class="mt-5">
            <div class="experience">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Mi Experiencia</h2>
                        <hr>
                        <ul class="mt-4 pt-2 list-one">
                            <li>Desarrollo y mantenimiento de un sistema ERP para empresas Retail.</li>
                            <li>Aplicaciones móviles con Android Studio (JAVA).</li>
                            <li>Desarrollo de aplicaciones Web y Desktop en JAVA, PHP/Laravel, Javascript/VueJS, HTML5, Sass, Css3.</li>
                            <li>Desarrollo de procesos automatizados con PHP Scripts.</li>
                            <li>Análisis, diseño y arquitectura de bases de datos con Mysql, MSSQL Server, Oracle y SQLites.</li>
                            <li>Tratado de datos con archivos externos (EXCEL) e integración automatizada con PHP.</li>
                        </ul>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <div>
                            <h4>Me estoy dedicando a</h4>
                            <hr>
                            <ul class="mt-4 pt-2 list-two">
                                <li>Trabajando en el mantenimiento de un sistema ERP</li>  
                                <li>Desarrollando demos para actualizar el portfolio</li>  
                                <li>Ampliar mis habilidades en control de versions Git y Github</li>
                                <li>Instruirme de forma autodidácta para ampliar mis conocimientos</li>
                            </ul>
                        </div>
                        <div class="mt-5">
                            <h4>Estoy en búsqueda de</h4>
                            <hr>
                            <ul class="mt-4 pt-2 list-three">
                                <li>Nuevos retos y desafíos.</li>  
                                <li>Cumplir con mis objetivos y propósitos propuestos.</li>  
                                <li>Colaborar, enseñar y aprender con el equipo de desarrollo.</li>
                                <li>Oportunidades que permitan que pueda desarrollar todo mi potencial.</li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    name: 'experience',
    components: { Navbar }
}
</script>