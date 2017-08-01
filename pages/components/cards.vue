<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <card-basic :theme="theme"></card-basic>
        <card-media-with-text :theme="theme"></card-media-with-text>
        <card-horizontal :theme="theme"></card-horizontal>
        <card-grids :theme="theme"></card-grids>
        <card-custom-actions :theme="theme"></card-custom-actions>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CardBasic from '~components/cards/#1-basic.vue'
    import CardMediaWithText from '~components/cards/#2-media-with-text.vue'
    import CardHorizontal from '~components/cards/#3-horizontal-cards.vue'
    import CardGrids from '~components/cards/#4-grids.vue'
    import CardCustomActions from '~components/cards/#5-custom-actions.vue'
    export default {
        components: {
            CardBasic,
            CardMediaWithText,
            CardHorizontal,
            CardGrids,
            CardCustomActions
        },
        data() {
            return {
                title: 'Components - Cards',
                description: 'The "v-card" component is a versatile component that can be used for anything from a panel to a static image.',
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