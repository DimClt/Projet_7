<template>
    <form @submit.prevent="updateProfileForm()" class="profile__form">
        <div class="profile__body">
            <div class="profile__firstmail">
                <label for="lastname">Prénom</label><br>
                <input v-model="newProfile.firstname" type="text" name="firstname" id="firstname">
            </div>
            <div class="profile__lastmail">
                <label for="lastname">Nom</label><br>
                <input v-model="newProfile.lastname" type="text" name="lastname" id="lastname">
            </div>
            <div class="profile__bio">
                <textarea v-model="newProfile.bio" name="bio" id="bio" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button type="submit" class="btn__submit">Modifier</button>
    </form>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'UpdateProfile',
    props: {
        profile: Object,
    },
    data() {
        return {
            newProfile: {
                firstname: this.profile.firstname,
                lastname: this.profile.lastname,
                bio: this.profile.bio,
                id: this.$route.params.userId
            }
        }
    },
    methods: {
        updateProfileForm() {
            api.updateUser(this.newProfile)
                .then(() => {
                    document.location.reload()
                })
        }
    }
}
</script>

<style lang="scss">

</style>