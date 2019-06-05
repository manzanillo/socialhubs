<template>
  <div id="app">
    <md-card v-for="(entry,index) in schedule" :key="index">
      <md-card-header>
        <div class="md-title">{{entry.title}}</div>
        <div class="md-subhead" v-if="entry.date">{{entry.date}}</div>
      </md-card-header>

      <md-card-content>{{entry.content}}</md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary">
          <router-link to="/lageplan">Lageplan</router-link>
        </md-button>
        <md-button class="md-dense">Verwerfen</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      schedule: []
    };
  },
  methods: {
    update: function() {}
  },
  mounted() {
    this.$options.sockets.onmessage = data => {
      let self = this;

      this.$notification.show(
        "Lust auf Kaffee?",
        {
          body:
            "Zucker Markberg ist gerade an der Kaffeemaschine, er kennt sich mit Facebook Ads aus!",
          icon: "../assets/Header_Logo_White.svg"
        },
        {
          onclick: function() {}
        }
      );

      let datestring = " ".concat(
        new Date().toLocaleDateString(),
        " - ",
        new Date().getHours(),
        ":",
        new Date().getMinutes()
      );

      self.schedule.unshift({
        title: "Lust auf Kaffee?",
        display: true,
        date: datestring,
        content:
          "Zucker Markberg ist gerade an der Kaffeemaschine, er kennt sich mit Facebook Ads aus!"
      });
      /*      this.schedule.unshift({
        title: "20. - 24. Mai",
        display: true,
        room: 2,
        content: data
      });
      */
    };

    let self = this;

    [
      "13. - 17. Mai",
      "20. - 24. Mai",
      "27. Mai - 1. Juni",
      "3. - 7. Juni"
    ].forEach(function(obj) {
      console.log(obj);
      axios
        .get(
          "https://0ulo02jmll.execute-api.eu-central-1.amazonaws.com/dev/graphql",
          {}
        )
        .then(response => {
          self;
          console.log(response.data);
          self.schedule.unshift({
            title: obj,
            display: true,
            room: response.data.data[0].room,
            content:
              "Hallo Stefan, ich habe dich diese Woche mit " +
              response.data.data[0].firstname +
              " " +
              response.data.data[0].lastname +
              " und " +
              response.data.data[1].firstname +
              " " +
              response.data.data[1].lastname +
              " zusammengebracht. Setz dich doch an Platz 4 in Raum 2."
          });
          //        this.schedule;
        })
        .catch(e => {
          console.log(e);
          this.schedule = [
            {
              title: "3. - 7. Juni",
              display: true,
              room: 1,
              content:
                "Hallo Stefan, ich habe dich diese Woche mit Max und Philipp zusammengebracht. Setz dich doch an Platz 4 in Raum 1."
            },
            {
              title: "27. Mai - 1. Juni",
              display: true,
              room: 2,
              content:
                "Hallo Stefan, ich habe dich diese Woche mit Sebastian und Max zusammengebracht. Setz dich doch an Platz 4 in Raum 2."
            },
            {
              title: "20. - 24. Mai",
              display: true,
              room: 2,
              content:
                "Hallo Stefan, ich habe dich diese Woche mit Sebastian und Philipp zusammengebracht. Setz dich doch an Platz 4 in Raum 2."
            },
            {
              title: "13. - 17. Mai",
              display: true,
              room: 2,
              content:
                "Hallo Stefan, ich habe dich diese Woche mit Sebastian und Philipp zusammengebracht. Setz dich doch an Platz 4 in Raum 2."
            }
          ];
        });
    });
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
