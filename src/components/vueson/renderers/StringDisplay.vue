<template>
    <div>
        <!--
        For Bootstrap
        -->
        <div v-if="theme === 'bootstrap'" class="form-group row">
            <label :for="id +'_' +propSchema.key" class="col-sm-2 col-form-label">{{propSchema.title}}</label>
            <div class="col-sm-10">
                <input type="text" v-model="inputValue" :id="id +'_' +propSchema.key" class="form-control">
                <p><small class="text-muted">{{propSchema.description}}</small></p>
            </div>
        </div>

        <!--
        For Bulma
        -->
        <div class="field is-horizontal" style="margin-bottom: 10px;" v-else-if="theme === 'bulma'">
            <div class="field-label is-normal">
                <label class="label" :for="id +'_' +propSchema.key">{{propSchema.title}}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control">
                        <input v-model="inputValue" :id="id +'_' +propSchema.key" :name="propSchema.key" class="input" type="text" >
                        <small class="has-text-grey-light">{{propSchema.description}}</small>
                    </p>
                </div>
            </div>
        </div>

        <!--
        For Material
        -->
        <div v-else-if="theme === 'material'">
            <label :for="id +'_' +propSchema.key">{{propSchema.title}}</label>
            <div>
                <input type="string" v-model="inputValue" :id="id +'_' +propSchema.key" :name="propSchema.key">
                <p><small>{{propSchema.description}}</small></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'String-Display',
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
                return 'Bootstrap';
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
        this.$emit('stringLoaded');
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
