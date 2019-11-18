<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-start mb-8'
                  "
                >
                  Zur Berechnung Ihres persönlichen Beitrags, benötigen wir ihr
                  Geburtsdatum.
                  <v-tooltip
                    bottom
                    max-width="300"
                    nudge-top="-5"
                    content-class="primary tooltip-with-top-arrow"
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon color="primary" v-on="on">mdi-information-outline</v-icon>
                    </template>
                    <v-card class="elevation-0 primary">
                      <v-layout d-flex row wrap>
                        <v-col cols="12" sm="2">
                          <v-icon color="white">mdi-information-outline</v-icon>
                        </v-col>
                        <v-col cols="12" sm="10" class="ml-0 pl-0">
                          <p class="text-left white--text mb-0">
                            <b>Tarife ohne Alterungsrückstellung:</b> Sie zahlen
                            zu Beginn niedrige Beiträge, die mit dem Alter
                            steigen.
                          </p>
                          <p class="text-left white--text mb-1">
                            <b>MEHR ></b>
                          </p>
                        </v-col>
                      </v-layout>
                    </v-card>
                  </v-tooltip>
                </p>
                <p class="pb-0 mb-0 mt-4 text-start body-2">Geburtsdatum</p>
                <v-form ref="dobForm">
                  <v-layout row class="dob-form">
                    <v-col cols="12" sm="4" xs="12">
                      <v-text-field label="TT" :rules="[v => ( !!v && v.length < 3) || '']"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4" xs="12">
                      <v-text-field label="MM" :rules="[v => ( !!v && v.length < 3) || '']"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4" xs="12">
                      <v-text-field label="JJJJ" :rules="[v => ( !!v && v.length < 5) || '']"></v-text-field>
                    </v-col>
                  </v-layout>
                </v-form>

                <v-btn
                  depressed
                  large
                  color="danger"
                  class="mt-4 white--text"
                  @click="onClickStartCalc"
                >Preise Berechnen</v-btn>
              </div>
            </template>
          </main-panel>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

import MainPanel from "@/components/MainPanel.vue";
export default {
  name: "InputDayOfBirthday",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Mein Geburtsdatum"
      // days: [
      //   "01",
      //   "02",
      //   "04",
      //   "05",
      //   "06",
      //   "07",
      //   "08",
      //   "09",
      //   "10",
      //   "11",
      //   "12",
      //   "13",
      //   "14",
      //   "15",
      //   "16",
      //   "17",
      //   "18",
      //   "19",
      //   "20",
      //   "21",
      //   "22",
      //   "23",
      //   "24",
      //   "25",
      //   "26",
      //   "27",
      //   "28",
      //   "29",
      //   "30",
      //   "31"
      // ],
      // months: [
      //   "01",
      //   "02",
      //   "03",
      //   "04",
      //   "05",
      //   "06",
      //   "07",
      //   "08",
      //   "09",
      //   "10",
      //   "11",
      //   "12"
      // ],
      // years: [
      //   "2010",
      //   "2011",
      //   "2012",
      //   "2013",
      //   "2014",
      //   "2015",
      //   "2016",
      //   "2017",
      //   "2018",
      //   "2019",
      //   "2020",
      //   "2021",
      //   "2022",
      //   "2023",
      //   "2024",
      //   "2025"
      // ]
    };
  },
  methods: {
    onClickStartCalc() {
      if (this.$refs.dobForm.validate()) {
        this.$router.push({ name: "Dashboard" });
      }
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";
.dob-form {
  & /deep/ .v-text-field__slot {
    input {
      font-family: "MetaPro-Normal";
      color: #00718f !important;
      font-size: 1.2em;
    }
  }
}

.v-label {
  &.v-label--active {
    display: none;
  }
}
</style>
