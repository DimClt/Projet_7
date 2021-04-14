<template>
    <form @submit.prevent="updateArticleForm()" class="article__form">
        <div class="article__body">
            <div class="article__title">
                <input type="text" v-model.lazy="newArticle.title" name="title" id="title">
            </div>
            <div class="article__text">
                <textarea v-model.lazy="newArticle.article_text" name="article_text" id="article_text" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button type="submit" class="btn__submit" aria-label="Mettre à jour l'article">Publier</button>
    </form>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'UpdateArticle',
    data() {
        return {
            newArticle: {
                title: this.$route.query.title,
                article_text: this.$route.query.article_text,
                article_id: this.$route.params.article_id
            }
        }
    },
    methods: {
        updateArticleForm() {
            api.updateArticle(this.newArticle)
                .then(() => {
                    this.$router.push({
                        name: 'Article',
                        params: {
                            article_id: this.newArticle.article_id
                        }
                    })
                })
        }
    }
}
</script>

<style lang="scss">

</style>