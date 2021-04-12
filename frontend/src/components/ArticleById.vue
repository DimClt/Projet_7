<template>
    <div class="article-by-id">
        <article v-for="item in article" v-bind:key="item.article_id" class="article-by-id">
            <div class="article-by-id__title">
                <h1>{{ item.title }}</h1>
            </div>
            <div v-if="userId == item.id || isAdmin == 1" class="article-by-id__controler">
                <div>
                    <router-link :to="{ name: 'Update', params: { article_id: item.article_id }, query: { ...item }}">
                        <button class="btn__update">Modifier</button>
                    </router-link>
                </div>
                <div>
                    <DeleteArticle :article_id="item.article_id"/>
                </div>
            </div>
            <div class="article-by-id__body">
                <div class="article-by-id__body--flex">
                    <img v-if="!item.user_pict" src="../assets/profile-default.jpeg" alt="Image profile par défaut" class="profile__info--img-default">
                    <img v-else :src="item.user_pict" alt="Image de profile personnalisée">
                    <div>
                        <router-link :to="{ name: 'Profile', params: { userId: item.id } }">
                            <p>Publié par : {{ item.firstname }} {{ item.lastname }}</p>
                        </router-link>
                        <p>Le : {{ moment(item.date_document).format('LLLL') }}</p>
                    </div>
                </div>
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
    },
    methods: {
        // moment() {
        //     let moment = require('moment')
        //     moment.locale('fr')
        // }
    }
}
</script>

<style lang="scss">
.article-by-id {
    &__title {
        font-size: 1.5rem;
    }
    &__controler {
        display: flex;
        justify-content: flex-end;
        & div:last-child {
            margin-left: 15px;
        }
    }
    &__body {
        a {
            text-decoration: none;
            color: #2C3E50;
        }
        &--flex {
            display: flex;
            justify-content: space-around;
            & img {
                padding-top: 1.25rem;
                width: 50px;
                height: 50px;
            }
        }
    }
}
</style>