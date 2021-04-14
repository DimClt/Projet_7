<template>
    <div class="home">
        <section class="article-list" v-if="user || logToken">
            <AllArticles />
        </section>
        <section class="home__login" v-if="!user & !logToken">
          <img src="../assets/acceuil-banniere-mobile.png" alt="Image d'acceuil" class="home__img--mobile">
          <img src="../assets/acceuil-banniere-large.png" alt="Image d'acceuil" class="home__img--large">
          <LoginItem @submit="login" />
        </section>
    </div>
</template>

<script>
import LoginItem from '../components/LoginItem'
import AllArticles from '../components/AllArticle'
export default {
    name: 'Home',
    components: {
        LoginItem,
        AllArticles
    },
    data() {
        return {
        user: null,
        logToken: localStorage.getItem('token')
        }
    },
    methods: {
        login({ userId, token }) {
        this.user = { userId, token }
        },
    }
}
</script>

<style lang="scss">
.home {
    img {
        width: 100%;
    }
    &__img {
        &--large {
            display: none;
        }
        @media screen and (min-width: 900px) {
            &--mobile {
                display: none;
            }
            &--large {
                display: block;
            }
        }
    }
}
</style>