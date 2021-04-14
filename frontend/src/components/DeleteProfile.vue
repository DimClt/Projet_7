<template>
    <button class="btn__delete" @click.prevent="deleteUserButton()" aria-label="Supprimer le profil">Supprimer</button>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'DeleteProfile',
    props: {
        userId: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteUserButton() {
            api.deleteUser(this.userId)
                .then(() => {
                    localStorage.clear()
                    this.$router.push('/')
                })
        }
    }
}
</script>

<style lang="scss">

</style>