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
                      ' text-left font-weight-bold mb-1'
                  "
                >
                  Wie viele fehlende, noch nicht ersetzte Zähne haben Sie?
                </p>
                <p class="text-left body-2 mb-1">
                  Ausgenommen Weisheitszähne, Lückenschlüsse bzw. Milchzähne,
                  die aufgrund des natürlichen Zahnwechsels fehlen.
                </p>

                <v-row justify="center">
                  <v-col cols="12" class="pb-0">
                    <v-row>
                      <v-col cols="12" class="pr-0">
                        <p
                          class="pb-0 text-left body-1 font-weight-bold mb-0 mt-2"
                        >
                          Anzahl?
                        </p>
                        <v-select
                          class="mt-2 pt-0 meta-pro-text primary--text"
                          :items="numbers"
                          v-model="number"
                          append-icon="mdi-chevron-down"
                          color="primary"
                          :rules="[v => !!v || '']"
                        ></v-select>
                        <v-spacer></v-spacer>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <p class="text-left font-weight-bold body-2 mb-1">Hinweis</p>
                <p class="text-left body-2 mb-1">
                  Sofern mehr als ein fehlender, noch nicht ersetzter vorhanden
                  ist, sind die bei Vertragsbeginn fehlenden Zähne vom
                  Versicherungsschutz ausgenommen.
                </p>
                <p
                  v-if="showReadMore"
                  class="text-left body-2 mb-1 primary--text cursor-pointer"
                  @click="onClickShowMore"
                >
                  mehr…
                </p>
                <div v-if="!showReadMore">
                  <p class="text-left body-2 mb-1">
                    <span class="font-weight-bold">Für bereits</span>
                    angeratene, geplante oder begonnene zahnärztliche Maßnahmen
                    besteht
                    <span class="font-weight-bold"
                      >kein Versicherungsschutz</span
                    >.
                    <span
                      class="text-left body-2 mb-1 primary--text cursor-pointer"
                      @click="onClickHideMore"
                      >…weniger</span
                    >
                  </p>
                </div>
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-left font-weight-bold mb-0 mt-6'
                  "
                >
                  Private Zahnzusatzversicherung schon vorhanden?
                </p>
                <v-radio-group
                  v-model="dentalInsuranceAvailable"
                  row
                  class="mt-1"
                >
                  <v-radio label="Ja" value="0"></v-radio>
                  <v-radio label="Nein" value="1"></v-radio>
                </v-radio-group>
                <div v-if="dentalInsuranceAvailable !== '1'">
                  <v-container class="px-0 pb-2 text-with-inputcontrol-icon">
                    <v-icon color="error" class="mr-2"
                      >mdi-information-outline</v-icon
                    >
                    <p
                      :class="
                        [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                          ' text-left font-weight-bold mb-0'
                      "
                    >
                      Verkürzte Leistungsbegrenzung bei Vorversicherung
                    </p>
                  </v-container>
                  <p class="text-left body-2 mb-2">
                    Es besteht bis zum Versicherungsbeginn eine private
                    Zusatzversicherung für Zahnersatz mit einer vorgesehenen
                    Erstattung von mindestens 80% bei dem folgenden Unternehmen:
                  </p>
                  <v-form ref="form">
                    <v-text-field
                      v-model="companies"
                      label="Unternehmen"
                      hint="Name Ihres bisherigen Versicherungsunternehmens"
                      :rules="[v => !!v || '']"
                    ></v-text-field>
                  </v-form>
                </div>
                <v-btn
                  depressed
                  large
                  color="danger"
                  :block="$vuetify.breakpoint.xs"
                  class="mt-4 white--text"
                  @click="onClickNext"
                  >Weiter</v-btn
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
  name: "MyDentalHealth",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Meine Zahngesundheit",
      dentalInsuranceAvailable: "1",
      number: "0",
      numbers: ["0", "1", "2", "3", "4", "mehr"],
      showReadMore: true,
      companies: ""
    };
  },
  methods: {
    onClickNext() {
      if (this.dentalInsuranceAvailable === "0" && !this.$refs.form.validate())
        return;

      // Proceed to next page
      this.$store.dispatch("profile/setMissedTeeth", this.number);

      if (this.dentalInsuranceAvailable == "1") {
        this.$store.dispatch("profile/setPrevInsCompany", {
          haveCompany: false,
          comapnyName: ""
        });
      } else
        this.$store.dispatch("profile/setPrevInsCompany", {
          haveCompany: true,
          companyName: this.companies
        });

      this.$router.push({ name: "MyPersonalData" });
    },
    onClickShowMore() {
      this.showReadMore = false;
    },
    onClickHideMore() {
      this.showReadMore = true;
    },
    fillData() {
      if (this.$store.state.profile.missedTeeth) {
        this.number = this.$store.state.profile.missedTeeth;
      }
      if (this.$store.state.profile.prevInsCompany.haveCompany) {
        this.dentalInsuranceAvailable = "0";
        this.companies = this.$store.state.profile.prevInsCompany.comapnyName;
      } else this.dentalInsuranceAvailable = "1";
    }
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 40);
    this.fillData();
  }
};
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
.text-with-inputcontrol-icon {
  display: flex;
  align-items: flex-start;
  .v-input--checkbox {
    display: inline-flex;
  }
  .v-icon {
    display: inline-flex;
  }
  p {
    display: inline-block;
  }
}
</style>
