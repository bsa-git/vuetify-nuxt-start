<template>
    <v-footer :fixed="fixed" :class="[theme.base,  'darken-3', 'pa-3', 'white--text']">
        <v-spacer></v-spacer>
        <div>{{ copyright }}</div>
    </v-footer>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: [
            'fixed',
            'copyright'
        ],
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>