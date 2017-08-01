<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <pickers-date-light :theme="theme"></pickers-date-light>
        <pickers-date-dark :theme="theme"></pickers-date-dark>
        <pickers-date-in-dialog-menu :theme="theme"></pickers-date-in-dialog-menu>
        <pickers-allowed-dates :theme="theme"></pickers-allowed-dates>
        <pickers-custom-format :theme="theme"></pickers-custom-format>
        <pickers-time-light :theme="theme"></pickers-time-light>
        <pickers-time-dark :theme="theme"></pickers-time-dark>
        <pickers-time-in-dialog-menu :theme="theme"></pickers-time-in-dialog-menu>
        <pickers-time24h-format :theme="theme"></pickers-time24h-format>
        <pickers-date-localization :theme="theme"></pickers-date-localization>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PickersDateLight from '~components/pickers/#1-date-light.vue'
    import PickersDateDark from '~components/pickers/#2-date-dark.vue'
    import PickersDateInDialogMenu from '~components/pickers/#3-date-in-dialog-menu.vue'
    import PickersAllowedDates from '~components/pickers/#4-allowed-dates.vue'
    import PickersCustomFormat from '~components/pickers/#5-custom-format.vue'
    import PickersTimeLight from '~components/pickers/#6-time-light.vue'
    import PickersTimeDark from '~components/pickers/#7-time-dark.vue'
    import PickersTimeInDialogMenu from '~components/pickers/#8-time-in-dialog-menu.vue'
    import PickersTime24hFormat from '~components/pickers/#9-time-24h-format.vue'
    import PickersDateLocalization from '~components/pickers/#10-date-localization.vue'
    export default {
        components: {
            PickersDateLight,
            PickersDateDark,
            PickersDateInDialogMenu,
            PickersAllowedDates,
            PickersCustomFormat,
            PickersTimeLight,
            PickersTimeDark,
            PickersTimeInDialogMenu,
            PickersTime24hFormat,
            PickersDateLocalization
        },
        data() {
            return {
                title: 'Components - Pickers',
                description: 'The "v-date-picker" and "v-time-picker" offer the user a visual representation for selecting date and time.'
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