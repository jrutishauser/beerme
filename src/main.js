import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vSelect from 'vue-select'
import VCalendar from 'v-calendar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('v-select', vSelect);
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
