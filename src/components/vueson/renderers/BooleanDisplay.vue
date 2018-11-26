<template>
    <div>
        <div v-if="theme === 'bootstrap'" class="form-check">
            <input class="form-check-input" :id="id +'_' +propSchema.key" :name="propSchema.key" type="checkbox" v-model="inputValue">
            <label class="form-check-label" :for="id +'_' +propSchema.key">
                {{propSchema.title}}
            </label>
        </div>

        <div v-else-if="theme === 'bulma'" class="form-check">
            <input :name="propSchema.key" :id="id +'_' +propSchema.key" type="checkbox" v-model="inputValue">
            <label :for="id +'_' +propSchema.key">
                {{propSchema.title}}
            </label>
        </div>

        <div v-else-if="theme === 'material'" class="form-check">
            <input :name="propSchema.key" :id="id +'_' +propSchema.key" type="checkbox" v-model="inputValue">
            <label :for="id +'_' +propSchema.key">
                {{propSchema.title}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Boolean-Display',
    props: {
        propSchema: {
            type: Object,
            default () {
                return {};
            }
        },
        theme: {
            type: String,
            default () {
                return 'bootstrap';
            }
        }
    },
    data () {
        return {
            inputValue: this.propSchema.value,
            id: null
        };
    },
    mounted () {
        this.$emit('booleanLoaded');
        this.id = this._uid;
    },
    watch: {
        /**
         * @param newVal - Value from watched input field
         *
         * Watches for the component model to change and emits the input event to propagate the value up
         */
        inputValue: function (newVal) {
            this.$emit('input', newVal);
        }
    }
};
</script>

<style scoped lang="scss">

</style>
