<template>
    <div></div>
</template>
<script>
    export default {
        created: function () {
            try {
                const e = new Error('We generate an error to show how it works on the client.')
                e.statusCode = 404
                throw e
            } catch (e) {
                this.$store.commit('SET_ERROR', e)
                this.$router.replace('/error')
            }
        }
    }
</script>
