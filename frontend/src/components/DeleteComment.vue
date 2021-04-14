<template>
    <button class="btn__delete" @click.prevent="deleteCommentButton()" aria-label="Supprimer le commentaire">Supprimer</button>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'DeleteComment', 
    props: {
        comment_id: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteCommentButton() {
            api.deleteComment(this.comment_id)
                .then (() => {
                    document.location.reload()
                })
        }
    }
}
</script>

<style lang="scss">

</style>