<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <fields-with-label :theme="theme"></fields-with-label>
        <fields-with-label-dark :theme="theme"></fields-with-label-dark>
        <fields-single-line-light :theme="theme"></fields-single-line-light>
        <fields-single-line-dark :theme="theme"></fields-single-line-dark>
        <fields-with-icon :theme="theme"></fields-with-icon>
        <fields-with-icon-dark :theme="theme"></fields-with-icon-dark>
        <fields-multi-line :theme="theme"></fields-multi-line>
        <fields-multi-line-dark :theme="theme"></fields-multi-line-dark>
        <fields-character-counter :theme="theme"></fields-character-counter>
        <fields-password-input :theme="theme"></fields-password-input>
        <fields-multi-line-character-counter :theme="theme"></fields-multi-line-character-counter>
        <fields-full-width-text-character-counter :theme="theme"></fields-full-width-text-character-counter>
        <fields-required :theme="theme"></fields-required>
        <fields-hint-text :theme="theme"></fields-hint-text>
        <fields-prefixes-suffixes :theme="theme"></fields-prefixes-suffixes>
        <fields-custom-validation :theme="theme"></fields-custom-validation>
        <fields-textarea :theme="theme"></fields-textarea>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import FieldsWithLabel from '~components/text-fields/#1-with-label.vue'
    import FieldsWithLabelDark from '~components/text-fields/#2-with-label-dark.vue'
    import FieldsSingleLineLight from '~components/text-fields/#3-single-line-light.vue'
    import FieldsSingleLineDark from '~components/text-fields/#4-single-line-dark.vue'
    import FieldsWithIcon from '~components/text-fields/#5-with-icon.vue'
    import FieldsWithIconDark from '~components/text-fields/#6-with-icon-dark.vue'
    import FieldsMultiLine from '~components/text-fields/#7-multi-line.vue'
    import FieldsMultiLineDark from '~components/text-fields/#8-multi-line-dark.vue'
    import FieldsCharacterCounter from '~components/text-fields/#9-character-counter.vue'
    import FieldsPasswordInput from '~components/text-fields/#10-password-input.vue'
    import FieldsMultiLineCharacterCounter from '~components/text-fields/#11-multi-line-character-counter.vue'
    import FieldsFullWidthTextCharacterCounter from '~components/text-fields/#12-full-width-text-character-counter.vue'
    import FieldsRequired from '~components/text-fields/#13-required-fields.vue'
    import FieldsHintText from '~components/text-fields/#14-hint-text.vue'
    import FieldsPrefixesSuffixes from '~components/text-fields/#15-prefixes-suffixes.vue'
    import FieldsCustomValidation from '~components/text-fields/#16-custom-validation.vue'
    import FieldsTextarea from '~components/text-fields/#17-textarea.vue'
    export default {
        components: {
            FieldsWithLabel,
            FieldsWithLabelDark,
            FieldsSingleLineLight,
            FieldsSingleLineDark,
            FieldsWithIcon,
            FieldsWithIconDark,
            FieldsMultiLine,
            FieldsMultiLineDark,
            FieldsCharacterCounter,
            FieldsPasswordInput,
            FieldsMultiLineCharacterCounter,
            FieldsFullWidthTextCharacterCounter,
            FieldsRequired,
            FieldsHintText,
            FieldsPrefixesSuffixes,
            FieldsCustomValidation,
            FieldsTextarea
        },
        data() {
            return {
                title: 'Components - Text fields',
                description: 'Text fields components are used for collecting user provided information.',
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