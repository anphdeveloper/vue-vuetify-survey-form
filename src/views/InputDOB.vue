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
                      <v-icon color="primary" v-on="on"
                        >mdi-information-outline</v-icon
                      >
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
                  <v-layout row class="dob-form meta-pro-text">
                    <v-col cols="12" sm="4" xs="12">
                      <v-text-field
                        v-model="day"
                        label="TT"
                        :rules="[
                          v =>
                            (!!v &&
                              v.length < 3 &&
                              Number(v) != NaN &&
                              Number(v) > 0 &&
                              Number(v) < 32) ||
                            ''
                        ]"
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4" xs="12">
                      <v-text-field
                        v-model="month"
                        label="MM"
                        :rules="[
                          v =>
                            (!!v &&
                              v.length < 3 &&
                              Number(v) != NaN &&
                              Number(v) > 0 &&
                              Number(v) < 13) ||
                            ''
                        ]"
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4" xs="12">
                      <v-text-field
                        v-model="year"
                        label="JJJJ"
                        :rules="[
                          v =>
                            (!!v &&
                              v.length == 4 &&
                              Number(v) != NaN &&
                              Number(v) >
                                Number(new Date().getFullYear()) - 100 &&
                              Number(v) <
                                Number(new Date().getFullYear()) + 100) ||
                            ''
                        ]"
                      >
                      </v-text-field>
                    </v-col>
                  </v-layout>
                </v-form>

                <v-btn
                  depressed
                  large
                  color="danger"
                  class="mt-4 white--text"
                  @click="onClickStartCalc"
                  >Preise Berechnen</v-btn
                >
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
      panelTitle: "Mein Geburtsdatum",
      day: null,
      month: null,
      year: null
    };
  },
  methods: {
    onClickStartCalc() {
      if (this.$refs.dobForm.validate()) {
        this.$store.dispatch(
          "profile/setDayOfBirth",
          new Date(this.year, Number(this.month) - 1, this.day)
        );
        this.$router.push({ name: "Dashboard" });
      }
    }
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 20);
  }
};
</script>

<style lang="scss">
.dob-form {
  & /deep/ .v-text-field__slot {
    input {
      color: #00718f !important;
      font-size: 1.2em;
    }
  }
}

// .v-label {
//   &.v-label--active {
//     display: none;
//   }
// }
</style>
