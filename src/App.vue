<template>
<div id="app">
    <div id="vuesonThemeSelect">
        <label>Theme
            <select v-model="theme">
                <option value="bootstrap">Bootstrap</option>
                <option value="bulma">Bulma</option>
                <option value="material">Material</option>
            </select>
        </label>
    </div>
    <BootstrapExample v-if="theme === 'bootstrap'"></BootstrapExample>
    <MaterialExample v-else-if="theme === 'material'"></MaterialExample>
    <BulmaExample v-else-if="theme === 'bulma'"></BulmaExample>
</div>
</template>

<script>
import BootstrapExample from './BootstrapExample.vue';
import MaterialExample from './MaterialExample.vue';
import BulmaExample from './BulmaExample.vue';

export default {
    name: 'app',
    data () {
        return {
            theme: 'bootstrap'
        };
    },
    components: {
        BootstrapExample,
        MaterialExample,
        BulmaExample
    }
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

#vuesonThemeSelect  {
    margin-left: 25px;
    select {
        display: block;
        width: 250px;
        height: 35px;
        padding: 50px;
        font-size: 1rem;
        line-height: 2;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
    }
}
</style>
