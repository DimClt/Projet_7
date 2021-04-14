<template>
    <header class="header">
      <nav class="nav">
        <router-link to="/" aria-label="Accueil">Home</router-link> |
        <router-link to="/signup" v-if="!logToken" aria-label="inscription">Inscription</router-link> <span v-if="!logToken">|</span>
        <router-link to="/about" v-if="!logToken" aria-label="A propos">About</router-link>
        <router-link to="/publish" v-if="logToken" aria-label="Publier un article">Publier</router-link> <span v-if="logToken">|</span>
        <router-link :to="{ name: 'Profile', params: { userId: userId } }" v-if="logToken" aria-label="Profil">Profil</router-link> <span v-if="logToken">|</span>
        <a @click.prevent="logout" v-if="logToken" aria-label="Déconnexion">Déconnexion</a>
      </nav>
      <div v-if="logToken" class="header__log-banniere">
          <img src="../assets/icon-above-font-mobile.png" alt="Groupomania logo mobile" class="header__log-banniere--mobile">
          <router-link to="/" aria-label="Accueil"><img src="../assets/icon-above-font-medium.png" alt="Groupomania logo large" class="header__log-banniere--medium"></router-link>
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
            window.location.replace('/')
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