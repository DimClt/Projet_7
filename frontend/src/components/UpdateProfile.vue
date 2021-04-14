<template>
    <form @submit.prevent="updateProfileForm()" enctype="multipart/form-data" class="profile__form">
        <div class="profile__body">
            <div class="profile__userPict">
                <label for="user_pict">Sélectionner une image de profile</label>
                <input @change="changePict" type="file" accept=".jpg, .jpeg, .png" ref="file" name="user_pict" id="user_pict">
            </div>
            <div class="profile__firstmail">
                <label for="lastname">Prénom :</label><br>
                <input v-model="firstname" type="text" name="firstname" id="firstname">
            </div>
            <div class="profile__lastmail">
                <label for="lastname">Nom :</label><br>
                <input v-model="lastname" type="text" name="lastname" id="lastname">
            </div>
            <div class="profile__bio">
                <label for="bio">Bio :</label><br>
                <textarea v-model="bio" name="bio" id="bio" cols="30" rows="10"></textarea>
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
            user_pict: this.profile.user_pict,
            firstname: this.profile.firstname,
            lastname: this.profile.lastname,
            bio: this.profile.bio,
            id: this.$route.params.userId
        }
    },
    methods: {
        changePict() {
            this.user_pict = this.$refs.file.files[0]
        },
        updateProfileForm() {
            let newProfile = new FormData()
            newProfile.append('user_pict', this.user_pict)
            newProfile.append('firstname', this.firstname)
            newProfile.append('lastname', this.lastname)
            newProfile.append('bio', this.bio)
            newProfile.append('userId', this.id)
            api.updateUser(newProfile, this.id)
                .then(() => {
                    document.location.reload()
                })
        }
    }
}
</script>

<style lang="scss">

</style>