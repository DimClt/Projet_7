<template>
    <div class="all-comment">
        <div v-if="comments.length">
            <ul class="all-comment__list">
                <li v-for="comment in comments" v-bind:key="comment.comment_id">
                    <div class="all-comment__comment">
                        <div v-if="!commentSelected && userId == comment.id || isAdmin == 1" class="all-comment__controler">
                            <div>
                                <button @click.self="updateComponent(comment.comment_id)" v-bind:comment_id="comment.comment_id" class="btn__update" aria-label="Modifier le commentaire">Modifier</button>
                            </div>
                            <div>
                                <DeleteComment :comment_id="comment.comment_id"/>
                            </div>
                        </div>
                        <div>
                            <div v-if="commentSelected && isAdmin == 1 || userId == comment.comment_author && commentSelected == comment.comment_id">
                                <UpdateComment :comment_id="comment.comment_id" :comment_text="comment.comment_text" />
                            </div>
                            <div v-if="!commentSelected">
                                <router-link :to="{ name: 'Profile', params: { userId: comment.id } }">
                                    <div class="all-comment__comment--flex">
                                        <img v-if="!comment.user_pict" src="../assets/profile-default.jpeg" alt="Image profile par défaut" class="profile__info--img-default">
                                        <img v-else :src="comment.user_pict" alt="Image de profile personnalisée">
                                        <div>
                                            <div>
                                                <p>{{ comment.firstname }} {{ comment.lastname }}</p>
                                            </div>
                                            <div>
                                                <p>Le : {{ moment(comment.comment_date).format('LLLL') }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                                <hr>
                                <div class="all-comment__comment--text">
                                    <p>{{ comment.comment_text }}</p>
                                </div>
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
let moment = require('moment')
moment.locale('fr')
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
            moment: moment,
            userId: localStorage.getItem('userId'),
            isAdmin: localStorage.getItem('admin'),
            commentSelected: null
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
        updateComponent(comment_id) {
            this.commentSelected = comment_id
        }
    }
}
</script>

<style lang="scss">
.all-comment {
    width: 80%;
    margin: auto;
    &__list {
        list-style-type: none;
        padding-left: 0;
        text-decoration: none;
        li {
            margin-bottom: 1rem;
        }
    }
    &__comment {
        background-color: rgba($color: #FFD7D7, $alpha: .75);
        border-radius: 5px;
        max-height: 300px;
        overflow: hidden;
        padding-bottom: 2rem;
        a {
            text-decoration: none;
            color: #2C3E50;
        }
        a:hover {
            color: #42b983;
            text-decoration: underline;
        }
        &--flex {
            display: flex;
            justify-content: space-around;
            & img {
                align-self: center;
                width: 50px;
                height: 50px;
                border-radius: 50px;
            }
        }
        &--text {
            overflow: auto;
            max-height: 216px;
        }
    }
    &__controler {
        display: flex;
        justify-content: flex-end;
        & div:last-child {
            margin-left: 15px;
        }
    }
    @media screen and (min-width: 900px) {
        width: 50%;
    }
}

</style>