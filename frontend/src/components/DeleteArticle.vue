<template>
    <button @click.prevent="deleteArticleButton()">Supprimer</button>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'DeleteArticle',
    props: {
        article_id: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteArticleButton() {
            api.deleteArticle(this.article_id)
                .then(() => {
                    this.$router.push('/')
                })
        }
    }
}
</script>

<style lang="scss">

</style>