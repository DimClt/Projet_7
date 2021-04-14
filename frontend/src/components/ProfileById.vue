<template>
    <div class="profile">
        <div v-if="userId == profile.id" class="profile__controler">
            <div>
                <router-link :to="{ name: 'User', params: { userId: this.userId }}" aria-label="Modifier le profil">
                    <button @click.prevent="profileUpdate()" class="btn__update">Modifier</button>
                </router-link>
            </div>
            <div>
                <DeleteProfile :userId="Number(userId)"/>
            </div>
        </div>
        <div class="profile__info">
            <img v-if="!profile.user_pict" src="../assets/profile-default.jpeg" alt="Image profile par défaut" class="profile__info--img-default">
            <img v-else :src="profile.user_pict" alt="Image de profile personnalisée"> 
            <hr>
            <div>
                <div class="profile_name">
                    <p>{{ profile.firstname }} {{ profile.lastname }}</p>
                </div>
                <div class="profile__mail">
                    <p>{{ profile.mail }}</p>
                </div>
            </div>
        </div>
        <div class="profile__bio">
            <p>{{ profile.bio }}</p>
        </div>
    </div>
</template>

<script>
import api from '../apiRequest'
import DeleteProfile from '../components/DeleteProfile'
export default {
    name: 'ProfileById',
    components: {
        DeleteProfile
    },
    data() {
        return {
            profile: [],
            userSelect: this.$route.params.userId,
            userId: localStorage.getItem('userId')
        }
    },
    mounted: function() {
        let thisVue = this
        api.getUserById(this.userSelect)
            .then(response => {
                thisVue.profile = response.data
            })
    },
    methods: {
        profileUpdate() {
            this.$emit('click', {
                updateProfile: true,
                profile: this.profile 
            })
        }
    }
}
</script>

<style lang="scss">
.profile {
    margin: auto;
    max-width: 400px;
    &__controler {
        display: flex;
        justify-content: flex-end;
        padding-right: 5%;
        & div:last-child {
            margin-left: 15px;
        }
    }
    &__info {
        display: flex;
        justify-content: space-around;
        & img {
            align-self: center;
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
        & hr {
            margin-left: 1rem;
        }
    }
}
</style>