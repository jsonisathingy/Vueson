import Vueson from './VuesonEditor.vue';

const plugin = {
    install (Vue) {
        Vue.component('Vueson', Vueson);
    }
};

export default plugin;
