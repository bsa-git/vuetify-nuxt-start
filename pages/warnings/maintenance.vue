<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card class="text-xs-center" hover raised>
                <v-card-text>
                    <div class="display-2 red--text text--accent-4">The site under maintenance</div>
                    <img id="img-maintenance" :src="`${staticPath}/images/system/technical_work.jpg`" alt="Maintenance">
                    <div class="headline red--text text--accent-4">We apologize for the temporary inconvenience</div>
                    <div class="headline">Check back later</div>
                    <div class="headline red--text text--accent-4">Administration</div>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                title: 'Maintenance',
                description: 'The site under maintenance'
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        created: function () {
            this.$store.commit('SET_THEME', 'info')
        },
        computed: {
            ...mapGetters({
                staticPath: 'getStaticPath'
            })
        }
    }
</script>

<style lang="stylus" scoped>
    #img-maintenance
        height: 40vh
</style>
