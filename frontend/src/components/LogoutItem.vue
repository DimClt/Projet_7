<template>
    <button type="logout" @click.prevent="logout">Déconnexion</button>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">

</style>