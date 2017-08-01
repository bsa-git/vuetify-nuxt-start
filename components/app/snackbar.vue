<template>
    <v-snackbar
            :top="getPosition"
            :timeout="getTimeout"
            :success="theme === 'success'"
            :info="theme === 'info'"
            :warning="theme === 'warning'"
            :error="theme === 'error'"
            :primary="theme === 'primary'"
            :secondary="theme === 'secondary'"
            :multi-line="getMode === 'multi-line'"
            :vertical="getMode === 'vertical'"
            v-model="compSnackbar"
    >
        <span v-text="getText"></span>
        <v-btn light flat @click.native="closeSnackbar">Close</v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        props: [
            'snackbar',
            'context',
            'text',
            'timeout',
            'mode',
            'bottom'
        ],
        computed: {
            theme: function () {
                return this.context || 'error'
            },
            getTimeout: function () {
                return this.timeout || 10000
            },
            getMode: function () {
                return this.mode || 'multi-line'
            },
            getText: function () {
                return this.text || "Hello, I\'m a snackbar"
            },
            getPosition: function () {
                return this.bottom ? false : true
            },
            compSnackbar: {
                // Getter:
                get: function () {
                    return this.snackbar
                },
                // Setter:
                set: function (newValue) {
                    this.$emit('onSnackbar', newValue)
                }
            }
        },
        methods: {
            closeSnackbar: function () {
                this.compSnackbar = false
            }
        }
    }
</script>