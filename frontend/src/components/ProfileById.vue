<template>
    <div class="profile">
        <div class="profile__controler">
            <DeleteProfile :userId="Number(userId)"/>
            <router-link :to="{ name: 'User', params: { userId: this.userId }}">
                <button @click.prevent="profileUpdate()" class="btn__update">Modifier</button>
            </router-link>
        </div>
        <div class="profile__info">
            <img :src="profile.user_pict" alt="">
            <div>
                <div class="profile_name">
                    <p>{{ profile.firstname }} {{ profile.lastname }}</p>
                </div>
                <div class="profile__mail">
                    <p>{{ profile.mail }}</p>
                </div>
                <div class="profile__bio">
                    <p>{{ profile.bio }}</p>
                </div>
            </div>
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

</style>