// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.afterEach( (to) => {
  document.body.style.backgroundRepeat = to.meta && to.meta.bgImage ? 'no-repeat' : ''
  document.body.style.backgroundPosition = to.meta && to.meta.bgImage ? 'center' : ''
  document.body.style.backgroundAttachment = to.meta && to.meta.bgImage ? 'fixed' : ''
  document.body.style.backgroundImage = to.meta && to.meta.bgImage ? `url(${to.meta.bgImage})` : ''
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
