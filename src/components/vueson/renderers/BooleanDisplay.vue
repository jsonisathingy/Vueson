<template>
    <div>
        <div class="form-check">
            <input class="form-check-input" :name="propSchema.title" type="checkbox" v-model="inputValue">
            <label class="form-check-label" :for="propSchema.title">
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
        }
    },
    data () {
        return {
            inputValue: this.propSchema.value
        };
    },
    mounted () {
        this.$emit('booleanLoaded');
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
