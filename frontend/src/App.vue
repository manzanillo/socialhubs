<template>
  <div id="app">
    <md-toolbar class="md-toolbar-tools black">
      <img alt="Vue logo" src="./assets/Header_Logo_White.svg">
      <h3 class="md-title">SocialHubs</h3>
    </md-toolbar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.black {
  background-color: #1e1e1e;
  color: white;
}

.black > img {
  width: 30%;
}
</style>
