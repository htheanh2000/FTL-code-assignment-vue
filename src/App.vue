<template>
  <div id="app">
    <div id="nav">
      <router-link :to="getRoutePath(n)" v-for="(n, index) in 4" :key="index">
        Q{{ n }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    getRoutePath(number) {
      return `/q${number}`;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
