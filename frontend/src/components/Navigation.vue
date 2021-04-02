<template>
    <header class="header">
      <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup" v-if="!logToken">Inscription</router-link> <span v-if="!logToken">|</span>
        <router-link to="/about" v-if="!logToken">About</router-link>
        <router-link to="/publish" v-if="logToken">Publier</router-link> <span v-if="logToken">|</span>
        <router-link :to="{ name: 'Profile', params: { userId: userId } }" v-if="logToken">Profile</router-link> <span v-if="logToken">|</span>
        <a @click.prevent="logout" v-if="logToken">Déconnexion</a>
      </nav>
      <div v-if="logToken" class="header__log-banniere">
          <img src="../assets/icon-above-font-mobile.png" alt="Groupomania">
      </div>
    </header>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            logToken: localStorage.getItem('token'),
            userId: localStorage.getItem('userId')
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
.header {
    &__log-banniere {
        img {
            width: 100%;
        }
    }
}
</style>