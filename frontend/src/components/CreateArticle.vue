<template>
    <form @submit.prevent="submitArticleForm()" class="article__form">
        <div class="article__body">
            <div class="article__title">
                <label for="title">Titre :</label>
                <input type="text" v-model.lazy="article.title" name="title" id="title" required>
            </div>
            <div class="article__text">
                <textarea v-model.lazy="article.article_text" name="article_text" id="article_text" cols="30" rows="10"  aria-label="Ecrivez votre article" required></textarea>
            </div>
        </div>
        <button type="submit" class="btn__submit" aria-label="Envoyer article">Publier</button>
    </form>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'CreateArticle',
    data() {
        return {
            article: {
                title: '',
                article_text: ''
            },
            errors: []
        }
    },
    methods: {
        submitArticleForm() {
            api.createArticle(this.article)
            .then(() => {
                alert('Votre article à été publié.')
                this.$router.push('Home')
            })
        }
    }
}
</script>

<style lang="scss">
.article {
    &__form {
        padding-bottom: 2rem;
    }
    &__title {
       margin-bottom: .5rem;
    }
    &__body {
        margin-bottom: 1rem;
    }
}
</style>