<template>
    <form @submit.prevent="updateCommentForm()" class="comment__form">
        <div class="comment__body">
            <div class="comment__text">
                <textarea v-model.lazy="newComment.comment_text" name="comment_text" id="comment_text" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button type="submit" class="btn__submit">Modifier</button>
    </form>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'UpdateComment',
    props: {
        comment_id: Number,
        comment_text: String
    },
    data() {
        return {
            newComment: {
                comment_article: this.$route.params.article_id,
                comment_text: this.comment_text,
                comment_id: this.comment_id
            }
        }
    },
    methods: {
        updateCommentForm() {
            api.updateComment(this.newComment)
                .then(() => {
                    document.location.reload()
                })
        }
    }
}
</script>

<style lang="scss">

</style>