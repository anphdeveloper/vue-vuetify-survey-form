<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle" :showBackButton="false">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'body-1'] +
                      ' text-start mb-8'
                  "
                >
                  Zur Berechnung Ihres persönlichen Beitrags benötigen wir Ihr
                  Geburtsdatum.
                  <v-menu
                    offset-y
                    max-width="300"
                    nudge-bottom="1"
                    nudge-left="137"
                    open-delay="0"
                    close-delay="0"
                    content-class="tooltip-with-top-arrow"
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon color="primary" v-on="on"
                        >mdi-information-outline</v-icon
                      >
                    </template>
                    <div class="tooltip-container">
                      <v-card class="elevation-0 primary px-2">
                        <v-layout d-flex row wrap>
                          <v-col cols="2" sm="2">
                            <v-icon color="white"
                              >mdi-information-outline</v-icon
                            >
                          </v-col>
                          <v-col cols="10" sm="10" class="ml-0 pl-0 text-left">
                            <p class="text-left white--text mb-0 body-2">
                              <b>Tarife ohne Alterungsrückstellung:</b> Sie
                              zahlen zu Beginn niedrige Beiträge, die mit dem
                              Alter steigen.
                            </p>
                            <v-btn
                              class="text-left white--text mb-1 btn-link"
                              :ripple="false"
                              text
                              @click="clickReadMore"
                            >
                              <b>MEHR ></b>
                            </v-btn>
                          </v-col>
                        </v-layout>
                      </v-card>
                    </div>
                  </v-menu>
                </p>
                <p class="pb-0 mb-0 mt-4 text-start body-2">Geburtsdatum</p>
                <v-form ref="dobForm">
                  <v-layout class="dob-form meta-pro-text">
                    <v-row column>
                      <v-col cols="3" sm="4">
                        <v-text-field
                          v-model="day"
                          label="TT"
                          ref="day"
                          :type="$vuetify.breakpoint.xs ? 'number' : ''"
                          @keypress="validateDay($event, day, 2)"
                          :rules="[
                            v =>
                              (validateBirthday() &&
                                !!v &&
                                v.length < 3 &&
                                Number(v) != NaN &&
                                Number(v) > 0 &&
                                Number(v) < 32) ||
                              ''
                          ]"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="3" sm="4">
                        <v-text-field
                          v-model="month"
                          label="MM"
                          ref="month"
                          :type="$vuetify.breakpoint.xs ? 'number' : ''"
                          @keypress="validateDay($event, month, 2)"
                          :rules="[
                            v =>
                              (validateBirthday() &&
                                !!v &&
                                v.length < 3 &&
                                Number(v) != NaN &&
                                Number(v) > 0 &&
                                Number(v) < 13) ||
                              ''
                          ]"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="4">
                        <v-text-field
                          v-model="year"
                          label="JJJJ"
                          ref="year"
                          :type="$vuetify.breakpoint.xs ? 'number' : ''"
                          @keyup.enter="handleEnterClick"
                          @keypress="validateDay($event, year, 4)"
                          :rules="[
                            v =>
                              (validateBirthday() &&
                                !!v &&
                                v.length == 4 &&
                                Number(v) != NaN &&
                                Number(v) >
                                  Number(new Date().getFullYear()) - 100 &&
                                Number(v) <
                                  Number(new Date().getFullYear()) + 1) ||
                              ''
                          ]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-layout>
                </v-form>

                <v-btn
                  depressed
                  large
                  color="danger"
                  :block="$vuetify.breakpoint.xs"
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
import { MORE_LINK_FOR_AGE_RATE } from "@/plugins/constants/profile";
export default {
  name: "InputDayOfBirthday",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Mein Geburtsdatum",
      day: "",
      month: "",
      year: "",
      showReadMore: false,
      getToday: new Date()
    };
  },
  watch: {
    day: function(newVal) {
      if (newVal.length == 2) this.$refs.month.focus();
    },
    month: function(newVal) {
      if (newVal.length == 2) this.$refs.year.focus();
    }
  },
  methods: {
    onClickStartCalc() {
      if (this.$refs.dobForm.validate() && this.validateBirthday()) {
        this.$store.dispatch(
          "profile/setDayOfBirth",
          new Date(this.year, Number(this.month) - 1, this.day)
        );
        this.$router.push({ name: "Dashboard" });
      }
    },
    validateBirthday() {
      const enteredDob = new Date(this.year, Number(this.month) - 1, this.day);
      return enteredDob > new Date() ? false : true;
    },
    validateDay(event, data, length) {
      if (/^\d+$/.test(event.key) && data.toString().length < length)
        return true;
      else event.preventDefault();
    },
    handleEnterClick() {
      this.onClickStartCalc();
    },
    clickReadMore() {
      window.open(
        "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/hb/" +
          MORE_LINK_FOR_AGE_RATE,
        "_blank"
      );
    },
    fillData() {
      if (this.$store.state.profile.dayOfBirth) {
        let dob = new Date(this.$store.state.profile.dayOfBirth)
          .toISOString()
          .slice(0, 10);
        this.day = dob.split("-")[2];
        this.month = dob.split("-")[1];
        this.year = dob.split("-")[0];
      }
    }
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 20);
    this.fillData();
  }
};
</script>

<style lang="scss">
.dob-form {
  .v-text-field__slot {
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
