<template>
    <div class="home" @>
        <div class="article-list" v-if="user || logToken">
            <AllArticles />
        </div>
        <div class="home__login" v-if="!user & !logToken">
          <img class="home__img" src="../assets/acceuil-banniere-mobile.png" alt="Image d'acceuil">
          <LoginItem @submit="login" />
        </div>
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
    &__img {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    // position: relative;
    // left: -50px;
  }
}
</style>