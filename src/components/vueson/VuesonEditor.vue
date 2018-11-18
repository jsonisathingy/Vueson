<template>
    <div class="vueson-schema-holder">
        <form class="vueson-schema-body" v-if="displaySchema">
            <template v-for="display in displaySchema">
                <BooleanDisplay :theme="theme" v-model="saveData[display.key]" :propSchema="display" :key="display.title +'_' +display.type" v-if="safeCompare(display.type, 'boolean')"></BooleanDisplay>
                <StringDisplay :theme="theme" v-model="saveData[display.key]" :propSchema="display" :key="display.title +'_' +display.type" v-if="safeCompare(display.type, 'string')"></StringDisplay>
                <NumberDisplay :theme="theme" v-model="saveData[display.key]" :propSchema="display" :key="display.title +'_' +display.type" v-if="safeCompare(display.type, 'number')"></NumberDisplay>
            </template>
        </form>
        <div class="vueson-no-schema" v-else>
            <h2>No Schema Provided</h2>
        </div>
    </div>
</template>

<script>
import forEach from 'lodash.foreach';
import clone from 'lodash.clone';
import BooleanDisplay from './renderers/BooleanDisplay';
import StringDisplay from './renderers/StringDisplay';
import NumberDisplay from './renderers/NumberDisplay';

export default {
    name: 'Vueson-Editor',
    components: {
        BooleanDisplay,
        StringDisplay,
        NumberDisplay
    },
    data () {
        let tempDisplaySchema = this.generateDisplaySchema(this.schema);

        return {
            displaySchema: tempDisplaySchema,
            saveData: this.generateResultJson(tempDisplaySchema)
        };
    },
    mounted () {
        this.$emit('vuesonLoaded');
    },
    props: {
        schema: {
            type: Object
        },
        theme: {
            type: String
        }
    },
    methods: {
        /**
         * @param value - Received value passed in from the user
         * @param check - Expected value for the editor
         *
         * Preforms a case insensitive check of values
         */
        safeCompare (value, check) {
            return value.toLowerCase() === check;
        },
        /**
         * @param schema - JSON Schema object
         *
         * Creates the master v-model object the editor will use to keep track of data changes
         */
        generateResultJson (schema) {
            let tempResult = {};

            forEach(schema, (details) => {
                if (details.value) {
                    tempResult[details.key] = details.value;
                } else {
                    switch (details.type) {
                    case 'string':
                        tempResult[details.key] = null;
                        break;
                    case 'boolean':
                        tempResult[details.key] = false;
                        break;
                    case 'number':
                        tempResult[details.key] = null;
                        break;
                    }
                }
            });

            return tempResult;
        },
        /**
         * @param schema - JSON Schema object
         *
         * Generates a display array that will be used to load components and expose the appropriate attributes
         */
        generateDisplaySchema (schema) {
            let tempDisplaySchema = [];

            forEach(schema, (details, key) => {
                let tempDetails = clone(details);

                tempDetails.key = key;
                tempDisplaySchema.push(tempDetails);
            });

            return tempDisplaySchema;
        },

        getJsonResult () {
            return this.saveData;
        }
    },
    watch: {
        /**
         * Watches for the schema property to change and updates the displaySchema appropriatly.
         * This is to ensure a single instance editor updates when the schema is updated
         */
        schema () {
            this.displaySchema = this.generateDisplaySchema(this.schema);
        }
    }
};
</script>

<style scoped lang="scss">

</style>
