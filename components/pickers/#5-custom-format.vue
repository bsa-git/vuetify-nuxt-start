<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Custom format</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        You can specify a custom date format. This will be returned through the <code>formatted-value</code>
                        prop.
                        Using the <code>sync</code> property <b>(new in Vue 2.3)</b>, you can link up a formatted version of the date.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex md12 lg4 class="ma-3">
                            <table class="table text-xs-left" style="width: 300px;">
                                <tbody>
                                <tr>
                                    <th>Original</th>
                                    <td>
                                        <strong>{{ picker || "No date" }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Formatted</th>
                                    <td>
                                        <strong>{{ formatted || "No date" }}</strong>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </v-flex>
                        <v-flex md12 lg4 class="ma-3">
                            <v-date-picker
                                    v-model="picker"
                                    :date-format="date => new Date(date).toDateString()"
                                    :formatted-value.sync="formatted"
                                    @update:formattedValue="val => formatted = val"
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
                formatted: null
            }
        }
    }
</script>