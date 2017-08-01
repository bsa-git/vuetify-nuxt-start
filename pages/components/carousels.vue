<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <carousel-default :theme="theme"></carousel-default>
        <carousel-custom-transition :theme="theme"></carousel-custom-transition>
        <carousel-custom-delimiter :theme="theme"></carousel-custom-delimiter>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CarouselDefault from '~components/carousels/#1-default.vue'
    import CarouselCustomTransition from '~components/carousels/#2-custom-transition.vue'
    import CarouselCustomDelimiter from '~components/carousels/#3-custom-delimiter.vue'
    export default {
        components: {
            CarouselDefault,
            CarouselCustomTransition,
            CarouselCustomDelimiter
        },
        data() {
            return {
                title: 'Components - Carousels',
                description: 'The "v-carousel" component is used to display large numbers of visual content on a rotating timer.',
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