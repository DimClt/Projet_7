<template>
    <div>
        <article v-for="item in article" v-bind:key="item.article_id" class="article-by-id">
            <div class="article-by-id__title">
                <h1>{{ item.title }}</h1>
            </div>
            <div v-if="userId == item.id || isAdmin == 1" class="article-by-id__controler">
                <div>
                    <router-link :to="{ name: 'Update', params: { article_id: item.article_id }, query: { ...item }}">
                        <button class="btn__update" aria-label="Modifier l'article">Modifier</button>
                    </router-link>
                </div>
                <div>
                    <DeleteArticle :article_id="item.article_id"/>
                </div>
            </div>
            <div class="article-by-id__body">
                <router-link :to="{ name: 'Profile', params: { userId: item.id } }">
                    <div class="article-by-id__body--flex">
                            <img v-if="!item.user_pict" src="../assets/profile-default.jpeg" alt="Image profile par défaut" class="profile__info--img-default">
                            <img v-else :src="item.user_pict" alt="Image de profile personnalisée">
                            <div>
                                <p>Publié par : {{ item.firstname }} {{ item.lastname }}</p>
                                <p>Le : {{ moment(item.date_document).format('LLLL') }}</p>
                            </div>
                    </div>
                </router-link>
                <p>{{ item.article_text }}</p>
            </div>
        </article>
    </div>
</template>

<script>
import api from '../apiRequest'
import DeleteArticle from './DeleteArticle'
let moment = require('moment')
moment.locale('fr')
export default {
    name: 'ArticleById',
    components: {
        DeleteArticle
    },
    data() {
        return {
            article_id: this.$route.params.article_id,
            article: [],
            moment: moment,
            userId: localStorage.getItem('userId'),
            isAdmin: localStorage.getItem('admin')
        }
    },
    mounted: function() {
        let thisVue = this
        api.getArticleById(this.article_id)
            .then(response => {
                thisVue.article = response.data
            })
    }
}
</script>

<style lang="scss">
.article-by-id {
    &__title {
        font-size: 1.5rem;
        @media screen and (min-width: 700px) {
            font-size: 2rem;
        }
    }
    &__controler {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        & div:last-child {
            margin-left: 15px;
        }
    }
    &__body {
        background-color: rgba($color:#FFD7D7, $alpha: .75);
        border-radius: 10px 10px 10px 10px;
        p {
            padding: 0 .5rem .5rem .5rem;
        }
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
            border-radius: 10px 10px 0 0;
            background-color: rgba($color: #fff, $alpha: 0.5);
            & img {
                align-self: center;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                @media screen and (min-width: 700px) {
                    width: 100px;
                    height: 100px;
                }
            }
            @media screen and (min-width: 700px) {
                padding: .5rem 0;
            }
        }
    }
    @media screen and (min-width: 700px) {
        width: 90%;
        margin: auto;
    }
    @media screen and (min-width: 900px) {
        width: 70%;
    }
}
</style>