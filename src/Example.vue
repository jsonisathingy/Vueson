<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <h5>Example Editor:</h5>
        <div class="card m-auto">
          <div class="card-body">
            <Vueson ref="vuesonEditor" :schema='schema'></Vueson>
          </div>
          <div class="card-footer">
            <button @click="showData" class="btn btn-primary">Display Data</button>
          </div>
        </div>
      </div>
      <div class="col-4" style="height: 200px; text-wrap: normal;">
        <pre class="bg-dark text-white" style="text-align:initial; height: 400px;">{{displayData}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import Vueson from './components/vueson';

export default {
    name: 'example',
    data () {
        return {
            displayData: '',
            schema: {
                age: {
                    title: 'Age',
                    description: 'Age',
                    type: 'number'
                },
                description: {
                    title: 'Description',
                    description: 'Description',
                    type: 'string'
                },
                address: {
                    title: 'Address',
                    description: 'Address',
                    value: '123 fake street',
                    type: 'string'
                },
                sendHelp: {
                    title: 'Send Help',
                    description: 'I need help',
                    type: 'boolean'
                },
                sendFood: {
                    title: 'Send Food',
                    description: 'I need food',
                    value: true,
                    type: 'boolean'
                }
            }
        };
    },
    components: {
        Vueson
    },
    methods: {
        showData () {
            this.displayData = JSON.stringify(this.$refs.vuesonEditor.getJsonResult(), undefined, 2);
        }
    },
    mounted () {
        // TODO Add Editor events for beforeLoad, Loaded and afterLoad
    }
};
</script>

<style scoped lang='scss'></style>
