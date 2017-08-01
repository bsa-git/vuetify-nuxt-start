<template>
    <v-navigation-drawer
            temporary
            :right="right"
            v-model="compRightDrawer"
    >
        <v-list>
            <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-icon light>compare_arrows</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: [
            'rightDrawer'
        ],
        data () {
            return {
                right: true,
            }
        },
        computed: {
            compRightDrawer: {
                get: function () {
                    return this.rightDrawer
                },
                set: function (newValue) {
                    this.$emit('onNavRight', newValue)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>