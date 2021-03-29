<template>
    <div>
        <div v-if="articleSelected" class="update-article">
            <h1>Modifier l'article :</h1>
            <UpdateArticle />
        </div>
        <div v-if="!articleSelected" class="create-article">
            <h1>Publier un article :</h1>
            <CreateArticle />
        </div>
    </div>
</template>

<script>
import CreateArticle from '../components/CreateArticle'
import UpdateArticle from '../components/UpdateArticle'
export default {
    name: 'Publish',
    components: {
        CreateArticle,
        UpdateArticle
    },
    data() {
        return {
            articleSelected: this.$route.params.article_id
        }
    }
}
</script>

<style lang="scss">

</style>