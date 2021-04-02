<template>
    <form @submit.prevent="submitCommentForm()" class="comment_form">
        <div>
            <textarea v-model="commentForm.comment_text" name="comment_text" id="comment_text" cols="30" rows="10" required></textarea>
        </div>
        <button type="submit" class="btn__submit">Commenter</button>
    </form>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'CreateComment',
    data() {
        return {
            article_id: this.$route.params.article_id,
            commentForm: {
                comment_article: this.$route.params.article_id,
                userId: Number(localStorage.getItem('userId')),
                comment_text: ''
            }
        }
    },
    methods: {
        submitCommentForm() {
            api.createComment(this.commentForm)
                .then(() => {
                    document.location.reload()
                })
        }
    }
}
</script>

<style lang="scss">

</style>