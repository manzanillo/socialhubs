<template>
  <div id="app">
    <div id="nav">
      <md-toolbar class="md-toolbar-tools black">
        <img alt="hackbaylogo" src="./assets/Header_Logo_White.svg">
        <h3 class="md-title">SocialHubs</h3>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" style="color: white;">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </div>
    <md-content>
      <router-view/>
    </md-content>
    <div v-if="false">
      <div class="phone-viewport">
        <md-bottom-bar md-type="fixed" md-sync-route>
          <md-bottom-bar-item to="/" md-label="Ich" md-icon="account_circle"></md-bottom-bar-item>
          <md-bottom-bar-item to="/about" md-label="Arbeitsplatz" md-icon="location_on"></md-bottom-bar-item>
          <md-bottom-bar-item
            to="/components/bottom-bar/favorites"
            md-label="Einstellungen"
            md-icon="settings"
          ></md-bottom-bar-item>
        </md-bottom-bar>
      </div>
    </div>
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

.spacer {
  margin-top: 200px;
}

a {
  color: black;
}
</style>
