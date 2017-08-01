<template>
    <div></div>
</template>
<script>
    export default {
        fetch({error}) {
            try {
                const e = new Error('We generate an error in the method "Fetch" to show how this works.')
                e.statusCode = 500
                throw e
            } catch (e) {
                error(e)
            }
        }
    }
</script>
