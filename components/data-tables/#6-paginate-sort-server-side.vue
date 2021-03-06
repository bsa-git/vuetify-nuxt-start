<template>
    <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#6 Paginate and sort server-side</v-toolbar-title>
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
    export default {
        props: [
            'theme'
        ],
        data () {
            return {
                search: '',
                totalItems: 0,
                items: [],
                loading: true,
                pagination: {
                    sortBy: 'Calories',
                    page: 1,
                    rowsPerPage: 5,
                    descending: false,
                    totalItems: 10
                },
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        left: true,
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Calories', value: 'calories'},
                    {text: 'Fat (g)', value: 'fat'},
                    {text: 'Carbs (g)', value: 'carbs'},
                    {text: 'Protein (g)', value: 'protein'},
                    {text: 'Sodium (mg)', value: 'sodium'},
                    {text: 'Calcium (%)', value: 'calcium'},
                    {text: 'Iron (%)', value: 'iron'}
                ]
            }
        },
        watch: {
            pagination: {
                handler () {
                    this.getDataFromApi()
                        .then(data => {
                            this.items = data.items
                            this.totalItems = data.total
                        })
                },
                deep: true
            }
        },
        mounted () {
            this.getDataFromApi()
                .then(data => {
                    this.items = data.items
                    this.totalItems = data.total
                })
        },
        methods: {
            getDataFromApi () {
                this.loading = true
                return new Promise((resolve, reject) => {
                    const {sortBy, descending, page, rowsPerPage} = this.pagination

                    let items = this.getUsers()
                    const total = items.length

                    if (this.pagination.sortBy) {
                        items = items.sort((a, b) => {
                            const sortA = a[sortBy]
                            const sortB = b[sortBy]

                            if (descending) {
                                if (sortA < sortB) return 1
                                if (sortA > sortB) return -1
                                return 0
                            } else {
                                if (sortA < sortB) return -1
                                if (sortA > sortB) return 1
                                return 0
                            }
                        })
                    }

                    if (rowsPerPage > 0) {
                        items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                    }

                    setTimeout(() => {
                        this.loading = false
                        resolve({
                            items,
                            total
                        })
                    }, 1000)
                })
            },
            getUsers () {
                return [
                    {
                        value: false,
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        sodium: 87,
                        calcium: '14%',
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        sodium: 129,
                        calcium: '8%',
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        sodium: 337,
                        calcium: '6%',
                        iron: '7%'
                    },
                    {
                        value: false,
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        sodium: 413,
                        calcium: '3%',
                        iron: '8%'
                    },
                    {
                        value: false,
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        sodium: 327,
                        calcium: '7%',
                        iron: '16%'
                    },
                    {
                        value: false,
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        sodium: 50,
                        calcium: '0%',
                        iron: '0%'
                    },
                    {
                        value: false,
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        sodium: 38,
                        calcium: '0%',
                        iron: '2%'
                    },
                    {
                        value: false,
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        sodium: 562,
                        calcium: '0%',
                        iron: '45%'
                    },
                    {
                        value: false,
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        sodium: 326,
                        calcium: '2%',
                        iron: '22%'
                    },
                    {
                        value: false,
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        sodium: 54,
                        calcium: '12%',
                        iron: '6%'
                    }
                ]
            }
        }
    }
</script>