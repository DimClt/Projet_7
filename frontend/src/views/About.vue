<template>
  <div class="about">
    <img src="../assets/acceuil-banniere-mobile.png" alt="Image d'acceuil" class="about__img--mobile">
    <img src="../assets/acceuil-banniere-large.png" alt="Image d'acceuil" class="about__img--large">
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="scss">
.about {
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
}
</style>
