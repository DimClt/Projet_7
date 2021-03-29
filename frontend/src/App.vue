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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
