<template>
    <div>
        <div class="form-group row">
            <label :name="propSchema.title" class="col-sm-2 col-form-label">{{propSchema.title}}</label>
            <div class="col-sm-10">
                <input type="number" v-model.number="inputValue" :name="propSchema.title" class="form-control">
                <p><small class="text-muted">{{propSchema.description}}</small></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Number-Display',
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
        this.$emit('numberLoaded');
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
