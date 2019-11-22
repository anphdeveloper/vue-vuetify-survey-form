<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <v-row justify="center">
                  <v-col cols="12" sm="6" md="4">
                    <p class="pb-0 mb-0 mt-4 text-start caption">Anrede</p>
                    <v-select
                      class="mt-0 pt-0 meta-pro-text primary--text"
                      :items="salutationOptions"
                      v-model="salutation"
                      append-icon="mdi-chevron-down"
                      color="primary"
                      :rules="[v => !!v || '']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="8">
                    <p class="pb-0 mb-0 mt-4 text-start caption">Titel (optional)</p>
                    <v-select
                      class="mt-0 pt-0 meta-pro-text primary--text"
                      :items="titleOptions"
                      v-model="title"
                      append-icon="mdi-chevron-down"
                      color="primary"
                      :rules="[v => !!v || '']"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="firstGivenName" label="Vorname" hint></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="surname" label="Nachname" hint></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="8">
                    <v-text-field v-model="street" label="Straße" hint></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field v-model="streetNo" label="HausNr." hint></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="country"
                      label="Land"
                      readonly
                      persistent-hint
                      hint="Wohnsitz in Deutschland ist Pflicht"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="4">
                    <v-text-field v-model="postCode" label="PLZ" hint></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <v-text-field v-model="place" label="Ort" hint></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="12">
                    <v-text-field v-model="phoneNo" label="Telefon- oder Mobilnummer" hint></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="12">
                    <v-text-field v-model="emailAddress" label="E-Mail-Adresse" hint></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="professionalActivities"
                      label="Berufliche Tätigkeit"
                      hint
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="settingDate"
                      label="Einstellungsdatum"
                      hint
                      placeholder="TT.MM.JJJJ"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-radio-group v-model="insuredOption" row class="mt-1">
                  <v-radio label="gesetzlich versichert" value="0"></v-radio>
                  <v-radio label="privat versichert" value="1"></v-radio>
                </v-radio-group>
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-start font-weight-bold mb-0 mt-6'
                  "
                >Kontaktaufnahme, Produktinformationen und Datenschutz</p>
                <p class="body1 text-start grey--text">(optional)</p>
                <v-form class="text-with-inputcontrol-icon" ref="form" lazy-validation>
                  <v-checkbox
                    large
                    v-model="agreeCheckBox"
                    :rules="[v => !!v || '']"
                    class="mt-0 pt-0"
                  />
                  <p class="text-start body-2 mb-1">
                    Ich bin damit einverstanden, dass mich die Gesellschaften des Gothaer Konzerns sowie ggf. ein mich betreuender Vermittler zwecks Information über Versicherungs- und
                    <span
                      v-if="showReadMore"
                      class="text-start body-2 mb-1 primary--text cursor-pointer"
                      @click="onClickShowMore"
                    >mehr…</span>
                    <span v-if="!showReadMore">
                      Finanzdienstleistungsprodukte sowie zur Vereinbarung persönlicher Beratungstermine per Telefon und E-Mail kontaktieren können. Ich kann meine Einwilligung jederzeit formfrei widerrufen. Dies z.B. per E-Mail an
                      <span class="primary--text">servicevereinbarung@gothaer.de</span> oder per Telefon unter 0221 - 308 91730.
                      <span
                        class="text-start body-2 mb-1 primary--text cursor-pointer"
                        @click="onClickHideMore"
                      >…weniger</span>
                    </span>
                  </p>
                </v-form>
                <v-btn
                  depressed
                  large
                  color="danger"
                  class="mt-7 white--text"
                  @click="onClickNext"
                >Weiter</v-btn>
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
      panelTitle: "Meine persönlichen Daten",
      salutationOptions: ["Frau", "Herr", "Divers"],
      salutation: "Frau",
      titleOptions: ["Dr.", "Prof."],
      title: "Dr.",
      firstGivenName: "",
      surname: "",
      street: "",
      streetNo: "",
      country: "Deutschland",
      postCode: "",
      place: "",
      phoneNo: "",
      emailAddress: "",
      professionalActivities: "",
      settingDate: "",
      insuredOption: "0",
      agreeCheckBox: false,
      dentalInsuranceAvailable: "1",
      number: "0",
      numbers: ["0", "1", "2", "3", "4", "mehr"],
      showReadMore: true
    };
  },
  methods: {
    onClickNext() {
      // Proceed to next page
      // this.$router.push({ name: "Dashboard" });
    },
    onClickShowMore() {
      this.showReadMore = false;
    },
    onClickHideMore() {
      this.showReadMore = true;
    }
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 40);
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