<template>
    <div class="login">
        <div class="login__signup-link">
            <p>Bienvenue sur Groupomania, si vous n'êtes pas encore inscrit <router-link to="/signup">cliquer ici !</router-link></p>
        </div>
        <div class="login__title">
            <h1>Connexion</h1>
        </div>
        <form @submit.prevent="submitLoginForm()" class="login__form">
            <div v-if="errors" class="login__error">
                        <h3>{{ errors }}</h3>
                    </div>
            <div class="login__body">
                <div class="login__form--mail">
                    <label for="mail">Adresse email :</label><br>
                    <input v-model.lazy="loginForm.mail" type="mail" name="mail" id="mail" required>
                </div>
                <div class="login__form--password">
                    <label for="password">Mot de passe :</label><br>
                    <input v-model.lazy="loginForm.password" type="password" name="password" id="password" required>
                </div>
            </div>
            <button type="submit" class="btn__submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
import api from '../apiRequest'
export default {
    name: 'LoginItem',
    data() {
        return {
            loginForm: {
                mail: '',
                password: ''
            },
            userId: Number,
            token: String,
            errors: null
        }
    },
    methods: {
        submitLoginForm() {
            api.login(this.loginForm)
            .then((response) => {
                this.$emit('submit', {
                    userId: response.data.userId,
                    token: response.data.token
                })
                localStorage.setItem('userId', response.data.userId)
                localStorage.setItem('admin', response.data.admin)
                localStorage.setItem('token', response.data.token)
                window.location.reload()
            })
            .catch(error => {
                this.errors = error.response.data.message
            })
        }
    }
}
</script>

<style lang="scss">
.login {
    &__signup-link a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }
    &__body {
        margin-bottom: 1rem;
    }
    &__form input {
        margin-bottom: .5rem;
    }
}
</style>