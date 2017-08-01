<template>
    <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#7 Get data from store for server-side</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        If you're loading data from a backend and want to paginate and sort the results before
                        displaying them, you can use the <code>total-items</code>
                        prop. Defining this prop will disable the built-in
                        sorting and pagination, and you will instead need to use the <code>pagination</code>
                        prop to listen for changes.
                        Use the <code>loading</code> prop to display a progress bar while fetching data.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-data-table
                            v-bind:headers="headers"
                            v-bind:items="items"
                            v-bind:search="search"
                            v-bind:pagination.sync="pagination"
                            :total-items="totalItems"
                            :loading="loading"
                            class="elevation-1"
                    >
                        <template slot="headerCell" scope="props">
                            <span v-tooltip:bottom="{ 'html': props.header.text }">
                              {{ props.header.text }}
                            </span>
                        </template>
                        <template slot="items" scope="props">
                            <td>{{ props.item.name }}</td>
                            <td  class="text-xs-right">{{ props.item.calories }}</td>
                            <td  class="text-xs-right">{{ props.item.fat }}</td>
                            <td  class="text-xs-right">{{ props.item.carbs }}</td>
                            <td  class="text-xs-right">{{ props.item.protein }}</td>
                            <td  class="text-xs-right">{{ props.item.sodium }}</td>
                            <td  class="text-xs-right">{{ props.item.calcium }}</td>
                            <td  class="text-xs-right">{{ props.item.iron }}</td>
                        </template>
                    </v-data-table>

                </div>
                <br/>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: [
            'theme'
        ],
        data () {
            return {
                search: '',
                pagination: {
                    sortBy: 'Calories',
                    page: 1,
                    rowsPerPage: 5,
                    descending: false,
                    totalItems: 10
                },
            }
        },
        computed: mapGetters({
            headers: 'getProductsHeaders',
            totalItems: 'getTotalProducts',
            loading: 'getLoadingProducts',
            items: 'getProducts'
        }),
        watch: {
            pagination: {
                handler: function () {
                    this.$store.dispatch('receiveProducts', this.pagination)
                },
                deep: true
            },
            totalItems: function (val) {
                if(val > 0){
                    this.$store.dispatch('receiveProducts', this.pagination)
                }
            }
        },
        created () {
            this.$store.dispatch('receiveTotalProducts')
        },
    }
</script>