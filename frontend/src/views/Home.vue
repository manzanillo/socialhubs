<template>
  <div id="app">
    <md-card
      v-for="(entry,index) in schedule"
      :key="index"
      v-bind:class="[entry.skill ? 'customCol' : '']"
    >
      <md-card-header>
        <div class="md-title">
          <div>
            <md-icon class="eigene-size">access_time</md-icon>
            {{entry.title}}
          </div>
        </div>
        <div class="md-subhead" v-if="entry.date">{{entry.date}}</div>
      </md-card-header>

      <md-card-content class="card-content-left">
        <div v-if="entry.skill">
          <div class="card-reservation">
            <md-icon>location_on</md-icon>
            {{entry.room}}
          </div>
          <div class="card-reservation">
            <md-icon>person</md-icon>
            {{entry.person1}}
          </div>

          <div style="width:100%; 	border-top: 1px solid #8c8b8b; margin: 8px 0px;"></div>

          <div class="card-reservation">
            <md-icon>info</md-icon>
            {{entry.skill}}
          </div>
        </div>

        <div v-if="!entry.skill">
          <div class="card-reservation">
            <md-icon>location_on</md-icon>
            {{entry.room}}
          </div>
          <div class="card-reservation">
            <md-icon>group</md-icon>
            {{entry.person1}} & {{entry.person2}}
          </div>

          <div style="width:100%; 	border-top: 1px solid #8c8b8b; margin: 8px 0px;"></div>

          <div class="card-reservation">
            <md-icon>location_off</md-icon>
            Alternativer Raum: {{entry.room}}
          </div>
        </div>
      </md-card-content>

      <md-card-actions v-if="!entry.skill">
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
        room: "Kaffeemaschine",
        person1: "Zucker Markberg",
        skill: "Zucker kennt sich mit Facebook Ads aus!"
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
            person1:
              response.data.data[0].firstname +
              " " +
              response.data.data[0].lastname,
            person2:
              response.data.data[1].firstname +
              " " +
              response.data.data[1].lastname
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

.card-content-left {
  text-align: left;
  font-size: 110%;
}

.eigene-size {
  margin: 4px 0px 8px 0px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  font-size: 24px !important;
}

.customCol {
  background-color: lightblue;
}
</style>
