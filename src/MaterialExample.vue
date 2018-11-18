<template>
    <div>
        <h5>Material Example Editor:</h5>
        <Vueson theme="material" ref="vuesonEditor" :schema='schema'></Vueson>
    </div>
</template>

<script>
import ExampleSchema from './SchemaExample';

export default {
    name: 'Material-Example',
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
    // TODO Add Material
</style>
