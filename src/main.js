import Vue from 'vue';
import App from './App.vue';
import Vueson from './components/vueson/index.js';

Vue.config.productionTip = false;

Vue.use(Vueson);

new Vue({
    render: h => h(App)
}).$mount('#app');
