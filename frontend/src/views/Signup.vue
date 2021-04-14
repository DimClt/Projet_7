<template>
    <div class="signup">
        <img src="../assets/acceuil-banniere-mobile.png" alt="Image d'acceuil" class="signup__img--mobile">
        <img src="../assets/acceuil-banniere-large.png" alt="Image d'acceuil" class="signup__img--large">
        <div class="signup--title">
            <h1>Formulaire d'inscription</h1>
        </div>
        <form class="signup__form">
            <div v-if="errors.length" class="signup__errors">
                <h3>Merci de corriger les erreurs</h3>
                <ul>
                    <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
            <div class="signup__body">
                <div class="signup__form--mail">
                    <label for="mail">Adresse email :</label><br>
                    <input v-model.lazy="signupForm.mail" type="mail" name="mail" id="mail" required>
                </div>
                <div class="signup__form--password">
                    <label for="password">Mot de passe :</label><br>
                    <input v-model.lazy="signupForm.password" type="password" name="password" id="password" required>
                </div>
                <div class="signup__form--firstname">
                    <label for="firstname">Prénom :</label><br>
                    <input v-model.lazy="signupForm.firstname" type="text" name="firstname" id="firstname" required>
                </div>
                <div class="signup__form_lastname">
                    <label for="lastname">Nom :</label><br>
                    <input v-model.lazy="signupForm.lastname" type="text" name="lastname" id="lastname" required>
                </div>
            </div>
            <button type="submit" @click.prevent="submitSignupForm" class="btn__submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
import api from '../apiRequest'
export default {
  name: 'Signup',
  data() {
      return {
          signupForm: {
              mail: '',
              password: '',
              firstname: '',
              lastname: ''
          },
          errors: []
      }
  },
  methods: {
    submitSignupForm() {
        this.errors = []
        if (this.signupForm.mail === '') {
            this.errors.push('Votre adresse mail est requis.')
        }
        if (this.signupForm.password === '') {
            this.errors.push('Votre mot de passe est requis.')
        }
        if (this.signupForm.firstname === '') {
            this.errors.push('Votre firstname est requis.')
        }
        if (this.signupForm.lastname === '') {
            this.errors.push('Votre lastname est requis.')
        } else {
            api.signup(this.signupForm)
            .then(() => {
                alert('Votre inscription a été enregistré. Bienvenue sur Groupomania')
                this.$router.push({
                    name: 'Home'
                })
            })
        }
      }
  }
}
</script>

<style lang="scss">
.signup {
    img {
        width: 100%;
    }
    &__img {
        &--large {
            display: none;
        }
        @media screen and (min-width: 900px) {
            &--mobile {
                display: none;
            }
            &--large {
                display: block;
            }
        }
    }
    &__body {
        margin-bottom: 1rem;
    }
    &__form input {
        margin-bottom: .5rem;
    }
}
</style>