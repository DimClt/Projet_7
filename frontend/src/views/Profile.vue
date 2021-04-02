<template>
    <div>
        <div v-if="updateSelect" class="profile__update">
            <h1>Modifier mes informations</h1>
            <UpdateProfile :profile="profile" />
        </div>
        <div v-if="!updateSelect" class="profile">
            <h1>Mon Profile</h1>
            <ProfileById @click="update" />
        </div>
    </div>
</template>

<script>
import ProfileById from '../components/ProfileById'
import UpdateProfile from '../components/UpdateProfile'
export default {
    name: 'Profile',
    components: {
        ProfileById,
        UpdateProfile
    },
    data() {
        return {
            updateSelect: null,
            profile: null
        }
    },
    methods: {
        update({ updateProfile, profile }) {
            this.updateSelect = updateProfile 
            this.profile = profile 
        }
    }
}
</script>

<style lang="scss">

</style>