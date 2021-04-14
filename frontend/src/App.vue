<template>
  <div id="app">
    <Navigation :key="$route.fullPath" />
    <main>
      <div class="app-icon">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  main {
    padding: 0 30px;
  }
}

.app-icon {
  background: url('./assets/icon-mobile.png') no-repeat fixed;
  background-position-x: center;
  background-position-y: 60%;
  min-height: 400px;
  @media screen and (min-width: 700px) {
    background-position-y: 70%;
  }
  @media screen and (min-width: 750px) {
    background: url('./assets/icon.png') no-repeat fixed;
    background-position-x: center;
    background-position-y: 50%;
    min-height: 600px;
  }
}

.nav {
  padding: 30px;
  
  a {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
    &.router-link-exact-active {
      color: #266b4c;
    }
  }
  a:hover {
    color: #42b983;
    text-decoration: underline;
  }
}

.btn {
  &__delete  {
    border-radius: 5px;
    background-color: #ff4305;
    border-color: #f26435;
    padding: 3px 10px;
  }
  &__update {
    border-radius: 5px;
    background-color: #42b983;
    border-color: #066e3f;
    padding: 3px 10px;
  }
  &__submit {
    border-radius: 5px;
    background-color: #92adc9;
    border-color: #132f4b;
    padding: 3px 10px;
  }
}

</style>
