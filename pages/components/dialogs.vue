<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <dialog-simple :theme="theme"></dialog-simple>
        <dialog-modal :theme="theme"></dialog-modal>
        <dialog-full-screen :theme="theme"></dialog-full-screen>
        <dialog-form :theme="theme"></dialog-form>
        <dialog-scrollable :theme="theme"></dialog-scrollable>
        <dialog-without-activator :theme="theme"></dialog-without-activator>
        <dialog-overflowed :theme="theme"></dialog-overflowed>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import DialogSimple from '~components/dialogs/#1-simple.vue'
    import DialogModal from '~components/dialogs/#2-modal.vue'
    import DialogFullScreen from '~components/dialogs/#3-full-screen.vue'
    import DialogForm from '~components/dialogs/#4-form.vue'
    import DialogScrollable from '~components/dialogs/#5-scrollable.vue'
    import DialogWithoutActivator from '~components/dialogs/#6-without-activator.vue'
    import DialogOverflowed from '~components/dialogs/#7-overflowed.vue'
    export default {
        components: {
            DialogSimple,
            DialogModal,
            DialogFullScreen,
            DialogForm,
            DialogScrollable,
            DialogWithoutActivator,
            DialogOverflowed
        },
        data() {
            return {
                title: 'Components - Dialogs',
                description: 'The "v-dialog" component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.',
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