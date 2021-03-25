<template>
    <header>
      <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup" v-if="!logToken">Inscription</router-link> <span v-if="!logToken">|</span>
        <router-link to="/about" v-if="!logToken">About</router-link>
        <a @click.prevent="logout" v-if="logToken">Déconnexion</a>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            logToken: localStorage.getItem('token')
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            setTimeout(() => {
                this.$router.replace('/').catch(err => {
                    if (
                        err.name !== 'NavigationDuplicated' &&
                        !err.message.includes('Avoided redundant navigation to current location')
                    ) {
                        this.logError(err)
                    }
                })
            }, 500)
        }
    }
}
</script>

<style lang="scss">

</style>