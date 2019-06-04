<template>
  <div id="app">
    <md-card v-for="(entry,index) in schedule" :key="index">
      <md-card-header>
        <div class="md-title">{{entry.title}}</div>
      </md-card-header>

      <md-card-content>{{entry.content}}</md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary">Lageplan</md-button>
        <md-button class="md-dense">Verwerfen</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      schedule: [
        {
          title: "4. Juni",
          display: true,
          content:
            "Hallo Stefan, ich habe dich heute mit Max und Philipp zusammengebracht. Setz dich doch an Platz 4 in Raum 1."
        },
        {
          title: "3. Juni",
          display: true,
          content:
            "Hallo Stefan, ich habe dich heute mit Sebastian und Max zusammengebracht. Setz dich doch an Platz 4 in Raum 2."
        },
        {
          title: "2. Juni",
          display: true,
          content:
            "Hallo Stefan, ich habe dich heute mit Sebastian und Philipp zusammengebracht. Setz dich doch an Platz 4 in Raum 2."
        }
      ]
    };
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

.md-card {
  margin: 1em;
}
</style>
