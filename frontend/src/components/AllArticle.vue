<template>
    <div>
        <h1>Liste des articles</h1>
        <div class="section__all-article" v-if="articles.length">
            <article class="section__article-card" v-for="article in articles" v-bind:key="article.article_id">
                <router-link :to="{ name: 'Article', params: { article_id: article.article_id } }">
                        <h2>{{ article.title }}</h2>
                        <div class="section__article-card--author">
                            <hr class="section__article-card--hr">
                            <div>
                                <p>Publié par : {{ article.firstname }} {{ article.lastname }}</p>
                                <p>Le : {{ moment(article.date_document).format('LLLL') }}</p>
                            </div>
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
        background-color: rgba($color:#FFD7D7, $alpha: .75);
        margin-bottom: 1rem;
        border-radius: 10px;
        &:hover {
            background-color: rgba($color: #FFD7D7, $alpha: 1.0);
        }
        &--author {
            background-color: #fff;
            padding-bottom: 1rem;
            div {
                p:last-child {
                    margin-bottom: 0;
                }
            }
        }
        a {
            text-decoration: none;
            color: #2C3E50;
            @media screen and (min-width: 700px) {
                display: flex;
                justify-content: space-between;
                padding-left: 1rem;
            }
        }
        @media screen and (min-width: 700px) {
            &--author {
                display: flex;
                background-color: #fff;
            }
            &--hr {
                margin-right: 1rem;
            }
        }
    }
}
</style>

