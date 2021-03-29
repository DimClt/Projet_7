<template>
    <div class="all-comment">
        <div v-if="comments.length">
            <ul class="all-comment__list">
                <li v-for="comment in comments" v-bind:key="comment.comment_id">
                    <div class="all-comment__comment">
                        <div v-if="userId == comment.id" class="all-comment__controler">
                            <DeleteComment :comment_id="comment.comment_id"/>
                        </div>
                        <div>
                            <div>
                                <p>{{ comment.firstname }} {{ comment.lastname }}</p>
                            </div>
                            <div>
                                <p>Le : {{ comment.comment_date }}</p>
                            </div>
                        </div>
                        <div>
                            <p>{{ comment.comment_text }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Soyez le premier à commenter</p>
        </div>
    </div>
</template>

<script>
import api from '../apiRequest'
import DeleteComment from './DeleteComment'
export default {
    name: 'AllComment',
    components: {
        DeleteComment
    },
    data() {
        return {
            comment_article: this.$route.params.article_id,
            comments: [],
            userId: localStorage.getItem('userId')
        }
    },
    mounted: function() {
        let thisVue = this
        api.getAllComments(this.comment_article)
            .then(response => {
                thisVue.comments = response.data
            })
    },
    // computed: {
    //     author: function() {
    //         if (this.comment.comment_author === localStorage.getItem('userId')) {
    //             return author = true
    //         }
    //     }
    // }
}
</script>

<style lang="scss">
.all-comment {
    &__list {
        list-style-type: none;
        padding-left: 0;
        text-decoration: none;
    }
    &__comment {
        background-color: rgba($color: #8E8E8E, $alpha: .25);
        border-radius: 5px;
    }
}
</style>