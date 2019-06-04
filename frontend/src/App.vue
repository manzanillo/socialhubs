<template>
  <div id="app">
    <div id="nav">
      <md-toolbar class="md-toolbar-tools black">
        <img alt="hackbaylogo" src="./assets/Header_Logo_White.svg">
        <h3 class="md-title">SocialHubs</h3>
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </md-toolbar>
    </div>
    <router-view/>
  </div>
</template>

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

.black > a {
  color: white;
}
</style>
