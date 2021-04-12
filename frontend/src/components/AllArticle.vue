<template>
    <div>
        <h1>Liste des articles</h1>
        <div class="section__all-article" v-if="articles.length">
            <article class="section__article-card" v-for="article in articles" v-bind:key="article.article_id">
                <router-link :to="{ name: 'Article', params: { article_id: article.article_id } }">
                        <h2>{{ article.title }}</h2>
                        <div>
                            <p>Publié par : {{ article.firstname }} {{ article.lastname }}</p>
                            <p>Le : {{ moment(article.date_document).format('LLLL') }}</p>
                        </div>
                </router-link>
            </article>
        </div>
        <div v-else>
            <p>Aucun articles trouvés, merci de recharger la page</p>
        </div>
    </div>    
</template>

<script>
import api from '../apiRequest'
let moment = require('moment')
moment.locale('fr')
export default {
    name: 'AllArticles',
    data() {
        return {
            articles: [],
            moment: moment
        }
    },
    mounted: function() {
        api.getAllArticles()
            .then(response => {
                this.articles = response.data
            })
    }
}
</script>

<style lang="scss">
.section {
    &__article-card {
        a {
            text-decoration: none;
            color: #2C3E50;
        }
    }
}
</style>

