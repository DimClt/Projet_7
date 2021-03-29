<template>
    <div class="article-by-id">
        <article v-for="item in article" v-bind:key="item.article_id" class="article-by-id">
            <div class="article-by-id__title">
                <h1>{{ item.title }}</h1>
            </div>
            <div v-if="userId == item.id" class="article-by-id__controler">
                <DeleteArticle :article_id="item.article_id"/>
                <router-link :to="{ name: 'Update', params: { article_id: item.article_id }, query: { ...item }}">
                    <button>Modifier</button>
                </router-link>
            </div>
            <div class="article-by-id__body">
                <div>
                    <p>Publié par : {{ item.firstname }} {{ item.lastname }}</p>
                    <p>Le : {{ item.date_document }}</p>
                </div>
                <p>{{ item.article_text }}</p>
            </div>
        </article>
    </div>
</template>

<script>
import api from '../apiRequest'
import DeleteArticle from './DeleteArticle'
export default {
    name: 'ArticleById',
    components: {
        DeleteArticle
    },
    data() {
        return {
            article_id: this.$route.params.article_id,
            article: [],
            userId: localStorage.getItem('userId')
        }
    },
    mounted: function() {
        let thisVue = this
        api.getArticleById(this.article_id)
            .then(response => {
                thisVue.article = response.data
            })
    }
}
</script>

<style lang="scss">

</style>