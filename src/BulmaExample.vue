<template>
    <div class="container">
        <h5 class="title is-5">Bulma Example Editor:</h5>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <article class="tile is-child notification">
                        <div class="content">
                            <Vueson theme="bulma" ref="vuesonEditor" :schema='schema'></Vueson>
                        </div>
                        <button  @click="showData" class="button is-link">Display Data</button>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-dark is-paddingless">
                    <div class="content">
                        <pre class="has-background-dark has-text-white">{{displayData}}</pre>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import ExampleSchema from './SchemaExample';

export default {
    name: 'Bulma-Example',
    data () {
        return {
            displayData: '',
            schema: ExampleSchema
        };
    },
    methods: {
        showData () {
            this.displayData = JSON.stringify(this.$refs.vuesonEditor.getJsonResult(), undefined, 2);
        }
    }
};
</script>

<style scoped lang='scss'>
    @import "../node_modules/bulma/css/bulma.min.css";
</style>
