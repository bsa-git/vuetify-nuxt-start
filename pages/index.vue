<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-container>
            <v-parallax src="/img/system/vbanner.jpg">
                <v-layout column align-center justify-center>
                    <h1 class="white--text">Vuetify.js</h1>
                    <h4 class="white--text">Build your application today!</h4>
                </v-layout>
            </v-parallax>
            <br/>
            <v-card>
                <v-card-text>
                    <p class="headline">Welcome to the Vuetify - Nuxt template.</p>
                    <p>
                        Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. For more information on Vuetify, check out the <a
                            href="https://vuetifyjs.com" target="_blank">documentation</a>. If you have questions, please join the official <a
                            href="https://gitter.im/vuetifyjs/Lobby" target="_blank" title="chat">gitter</a>. Find a bug? Report it on the github <a
                            href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.
                    </p>
                    <p>
                        Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
                    <div class="text-xs-right">
                        <em>
                            <small>&mdash; John Leider</small>
                        </em>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn primary flat router to="/components/layout">Continue</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Nuxt + Vuetify project',
                description: 'Universal Vuetify Applications for Nuxt'
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
        fetch({store, error}) {
            try {
                store.commit('SET_THEME', 'home')
            } catch (e) {
                error(e)
            }
        }
    }
</script>