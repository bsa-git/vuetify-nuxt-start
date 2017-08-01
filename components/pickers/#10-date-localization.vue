<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#10 Date pickers - Localization</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The date picker supports internationalization through the JavaScript Date object.
                        Specify a BCP 47 language tag using the locale prop, and then set the first day of the week
                        with the <code>first-day-of-week prop</code>.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <!--
                    <v-layout row wrap>
                        <v-flex xs12 lg4 class="ma-3">
                            <v-date-picker
                                    v-model="picker"
                                    :days = "days"
                                    :months="months"
                                    :no-title="false"
                            ></v-date-picker>
                        </v-flex>
                        <v-flex xs12 lg4 class="ma-3">
                            <v-date-picker
                                    v-model="picker2"
                                    :days = "days"
                                    :months="months"
                                    :no-title="false"
                                    landscape
                            ></v-date-picker>
                        </v-flex>
                    </v-layout>
                    -->
                    <v-layout justify-space-between wrap>
                        <v-flex xs12 sm6 md4>
                            <v-date-picker
                                    :first-day-of-week="0"
                                    locale="zh-cn"
                                    v-model="picker"
                            ></v-date-picker>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-date-picker
                                    :first-day-of-week="1"
                                    locale="sv-se"
                                    v-model="picker"
                            ></v-date-picker>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-date-picker
                                    :first-day-of-week="1"
                                    locale="ru"
                                    v-model="picker"
                            ></v-date-picker>
                        </v-flex>
                    </v-layout>

                </v-container>
                <br/>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: [
            'theme'
        ],
        data () {
            return {
                picker: null,
                picker2: null,
                days: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
            }
        }
    }
</script>