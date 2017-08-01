<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <table-standard :theme="theme"></table-standard>
        <table-selectable-rows :theme="theme"></table-selectable-rows>
        <table-search :theme="theme"></table-search>
        <table-external-pagination :theme="theme"></table-external-pagination>
        <table-external-sorting :theme="theme"></table-external-sorting>
        <table-paginate-sort-server-side :theme="theme"></table-paginate-sort-server-side>
        <table-store-server-side :theme="theme"></table-store-server-side>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TableStandard from '~components/data-tables/#1-standard.vue'
    import TableSelectableRows from '~components/data-tables/#2-selectable-rows.vue'
    import TableSearch from '~components/data-tables/#3-search.vue'
    import TableExternalPagination from '~components/data-tables/#4-external-pagination.vue'
    import TableExternalSorting from '~components/data-tables/#5-external-sorting.vue'
    import TablePaginateSortServerSide from '~components/data-tables/#6-paginate-sort-server-side.vue'
    import TableStoreServerSide from '~components/data-tables/#7-store-server-side.vue'
    export default {
        components: {
            TableStandard,
            TableSelectableRows,
            TableSearch,
            TableExternalPagination,
            TableExternalSorting,
            TablePaginateSortServerSide,
            TableStoreServerSide,
        },
        data() {
            return {
                title: 'Components - Data tables',
                description: 'The "v-data-table" component is used for displaying tabular data.',
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
                store.commit('SET_THEME', 'comp')
            } catch (e) {
                error(e)
            }
        },
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>

<style lang="stylus" scoped>
    .layout
        margin-bottom: 16px
</style>