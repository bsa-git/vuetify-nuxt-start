<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <steppers-example :theme="theme"></steppers-example>
        <steppers-editable :theme="theme"></steppers-editable>
        <steppers-non-editable :theme="theme"></steppers-non-editable>
        <steppers-optional :theme="theme"></steppers-optional>
        <steppers-horizontal :theme="theme"></steppers-horizontal>
        <steppers-vertical :theme="theme"></steppers-vertical>
        <steppers-linear :theme="theme"></steppers-linear>
        <steppers-non-linear :theme="theme"></steppers-non-linear>
        <steppers-alternate-labels :theme="theme"></steppers-alternate-labels>
        <steppers-multiline-error-state :theme="theme"></steppers-multiline-error-state>
        <steppers-alternative-label-multiline-error-state :theme="theme"></steppers-alternative-label-multiline-error-state>
        <steppers-vertical-multiline-error-state :theme="theme"></steppers-vertical-multiline-error-state>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import SteppersExample from '~components/steppers/#1-example.vue'
    import SteppersEditable from '~components/steppers/#2-editable.vue'
    import SteppersNonEditable from '~components/steppers/#3-non-editable.vue'
    import SteppersOptional from '~components/steppers/#4-optional.vue'
    import SteppersHorizontal from '~components/steppers/#5-horizontal.vue'
    import SteppersVertical from '~components/steppers/#6-vertical.vue'
    import SteppersLinear from '~components/steppers/#7-linear.vue'
    import SteppersNonLinear from '~components/steppers/#8-non-linear.vue'
    import SteppersAlternateLabels from '~components/steppers/#9-alternate-labels.vue'
    import SteppersMultilineErrorState from '~components/steppers/#10-multi-line-error-state.vue'
    import SteppersAlternativeLabelMultilineErrorState from '~components/steppers/#11-alternative-label-multi-line-error-state.vue'
    import SteppersVerticalMultilineErrorState from '~components/steppers/#12-vertical-multi-line-error-state.vue'
    export default {
        components: {
            SteppersExample,
            SteppersEditable,
            SteppersNonEditable,
            SteppersOptional,
            SteppersHorizontal,
            SteppersVertical,
            SteppersLinear,
            SteppersNonLinear,
            SteppersAlternateLabels,
            SteppersMultilineErrorState,
            SteppersAlternativeLabelMultilineErrorState,
            SteppersVerticalMultilineErrorState
        },
        data() {
            return {
                title: 'Components - Steppers',
                description: 'The "v-stepper" component displays progress through numbered steps.',
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