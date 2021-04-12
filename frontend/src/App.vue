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
}

.app-icon {
  background: url('./assets/icon-mobile.png') no-repeat;
  background-position-x: center;
  background-position-y: 25px;
}

.nav {
  padding: 30px;
  
  a {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
    &.router-link-exact-active {
      color: #42b983;
    }
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
