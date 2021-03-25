<template>
    <div>
        <ul v-if="articles.length">
            <li v-for="article in articles" v-bind:key="article.article_id">
                <router-link>
                    <article>
                        <h2>{{ article.title }}</h2>
                        <div>
                            <p>Publié par : {{ article.firstname }} {{ article.lastname }}</p>
                            <p>Le : {{ article.date_document }}</p>
                        </div>
                    </article>
                </router-link>
            </li>
        </ul>
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

</style>