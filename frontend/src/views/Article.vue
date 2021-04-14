<template>
    <div>
        <section class="article">
            <ArticleById />
        </section>
        <hr>
        <section class="comments">
            <div class="comments__list">
                <AllComment />
            </div>
            <hr>
            <div class="comment-form">
                <CreateComment />
            </div>
        </section>
    </div>
</template>

<script>
import ArticleById from '../components/ArticleById'
import AllComment from '../components/AllComment'
import CreateComment from '../components/CreateComment'
export default {
    name: 'Article',
    components: {
        ArticleById,
        AllComment,
        CreateComment
    }
}
</script>

<style lang="scss">
.comments {
    &__list {
        max-height: 900px;
        overflow: hidden;
        .all-comment {
            overflow: auto;
            max-height: 840Px;
        }
    }
}
</style>