<template>
    <div class="all-article">
        <div v-if="articles.length">
            <ul class="all-article__list">
                <li v-for="article in articles" v-bind:key="article.article_id">
                    <router-link :to="{ name: 'Article', params: { article_id: article.article_id } }">
                        <article class="all-article__article">
                            <h2>{{ article.title }}</h2>
                            <div>
                                <p>Publié par : {{ article.firstname }} {{ article.lastname }}</p>
                                <p>Le : {{ article.date_document }}</p>
                            </div>
                        </article>
                    </router-link>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Aucun articles trouvés, merci de recharger la page</p>
        </div>
    </div>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'AllArticles',
    data() {
        return {
            articles: []
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
.all-article {
    &__list {
        list-style-type: none;
        padding-left: 0;
        text-decoration: none;
        a {
            text-decoration: none;
            color: #000;
            
        }
    }
    &__article {
        background-color: rgba($color: #8E8E8E, $alpha: .25);
        border-radius: 5px;
    }
}
</style>