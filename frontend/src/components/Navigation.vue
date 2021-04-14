<template>
    <header class="header">
      <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup" v-if="!logToken">Inscription</router-link> <span v-if="!logToken">|</span>
        <router-link to="/about" v-if="!logToken">About</router-link>
        <router-link to="/publish" v-if="logToken">Publier</router-link> <span v-if="logToken">|</span>
        <router-link :to="{ name: 'Profile', params: { userId: userId } }" v-if="logToken">Profil</router-link> <span v-if="logToken">|</span>
        <a @click.prevent="logout" v-if="logToken">Déconnexion</a>
      </nav>
      <div v-if="logToken" class="header__log-banniere">
          <img src="../assets/icon-above-font-mobile.png" alt="Groupomania" class="header__log-banniere--mobile">
          <router-link to="/"><img src="../assets/icon-above-font-medium.png" alt="Groupomania" class="header__log-banniere--medium"></router-link>
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
                this.$router.push('/').catch(err => {
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
        &--medium {
            display: none;
        }
        img {
            width: 100%;
        }
        @media screen and (min-width: 700px) {
            &--mobile {
                display: none;
            }
            &--medium {
                display: block;
            }
        }
    }
    @media screen and (min-width: 900px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        &__log-banniere {
            width: 40%;
        }
    }
}
</style>