<template>
    <div class="all-comment">
        <div v-if="comments.length">
            <ul class="all-comment__list">
                <li v-for="comment in comments" v-bind:key="comment.comment_id">
                    <div class="all-comment__comment">
                        <div v-if="!update && userId == comment.id" class="all-comment__controler">
                            <DeleteComment :comment_id="comment.comment_id"/>
                            <button @click.prevent="updateComponent" class="btn__update">Modifier</button>
                        </div>
                        <div>
                            <div v-if="!update">
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
                            <div v-if="update">
                                <UpdateComment :comment_id="comment.comment_id" :comment_text="comment.comment_text" />
                            </div>
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
import UpdateComment from './UpdateComment'
export default {
    name: 'AllComment',
    components: {
        DeleteComment,
        UpdateComment
    },
    data() {
        return {
            comment_article: this.$route.params.article_id,
            comments: [],
            userId: localStorage.getItem('userId'),
            update: false
        }
    },
    mounted: function() {
        let thisVue = this
        api.getAllComments(this.comment_article)
            .then(response => {
                thisVue.comments = response.data
            })
    },
    methods: {
        updateComponent() {
            this.update = true
        }
    }
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