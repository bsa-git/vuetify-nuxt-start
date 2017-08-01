<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <list-avatar-lines2 :theme="theme"></list-avatar-lines2>
        <list-avatar-title-action :theme="theme"></list-avatar-title-action>
        <list-icon-lines2-action :theme="theme"></list-icon-lines2-action>
        <list-avatar-lines3 :theme="theme"></list-avatar-lines3>
        <list-avatar-title-action-icon :theme="theme"></list-avatar-title-action-icon>
        <list-subheadings-dividers :theme="theme"></list-subheadings-dividers>
        <list-card-image-with-toolbar-and-list :theme="theme"></list-card-image-with-toolbar-and-list>
        <list-title-sub-title-action-text :theme="theme"></list-title-sub-title-action-text>
        <list-action-title-sub-title :theme="theme"></list-action-title-sub-title>
        <list-expansion-lists :theme="theme"></list-expansion-lists>
        <list-dark-scheme :theme="theme"></list-dark-scheme>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ListAvatarLines2 from '~components/lists/#1-avatar-2-lines.vue'
    import ListAvatarTitleAction from '~components/lists/#2-avatar-title-action.vue'
    import ListIconLines2Action from '~components/lists/#3-icon-2-lines-action.vue'
    import ListAvatarLines3 from '~components/lists/#4-avatar-3-lines.vue'
    import ListAvatarTitleActionIcon from '~components/lists/#5-avatar-title-action-icon.vue'
    import ListSubheadingsDividers from '~components/lists/#6-subheadings-dividers.vue'
    import ListCardImageWithToolbarAndList from '~components/lists/#7-card-image-with-toolbar-and-list.vue'
    import ListTitleSubTitleActionText from '~components/lists/#8-title-sub-title-action-text.vue'
    import ListActionTitleSubTitle from '~components/lists/#9-action-title-sub-title.vue'
    import ListExpansionLists from '~components/lists/#10-expansion-lists.vue'
    import ListDarkScheme from '~components/lists/#11-dark-scheme.vue'
    export default {
        components: {
            ListAvatarLines2,
            ListAvatarTitleAction,
            ListIconLines2Action,
            ListAvatarLines3,
            ListAvatarTitleActionIcon,
            ListSubheadingsDividers,
            ListCardImageWithToolbarAndList,
            ListTitleSubTitleActionText,
            ListActionTitleSubTitle,
            ListExpansionLists,
            ListDarkScheme
        },
        data() {
            return {
                title: 'Components - Lists',
                description: 'The "v-list" component is used to display information.',
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