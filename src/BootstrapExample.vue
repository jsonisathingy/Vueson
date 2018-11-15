<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h5>Bootstrap Example Editor:</h5>
                <div class="card m-auto">
                    <div class="card-body">
                        <Vueson theme="bootstrap" ref="vuesonEditor" :schema='schema'></Vueson>
                    </div>
                    <div class="card-footer">
                        <button @click="showData" class="btn btn-primary float-right">Display Data</button>
                    </div>
                </div>
            </div>
            <div class="col-4" style="height: 200px; text-wrap: normal;">
                <pre class="bg-dark text-white p-2" style="text-align:initial; height: 400px;">{{displayData}}</pre>
            </div>
        </div>
    </div>
</template>

<script>
import Vueson from './components/vueson';
import ExampleSchema from './SchemaExample';

export default {
    name: 'Bootstrap-Example',
    data () {
        return {
            displayData: '',
            schema: ExampleSchema
        };
    },
    components: {
        Vueson
    },
    methods: {
        showData () {
            this.displayData = JSON.stringify(this.$refs.vuesonEditor.getJsonResult(), undefined, 2);
        }
    }
};
</script>

<style scoped lang='scss'>
    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
