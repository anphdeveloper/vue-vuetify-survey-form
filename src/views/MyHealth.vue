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
                      ' text-start font-weight-bold mb-4'
                  "
                >
                  Bitte beantworten Sie die Frage wahrheitsgemäß, da ansonsten
                  Ihr Versicherungsschutz gefährdet sein kann.
                </p>
                <v-form
                  class="text-with-inputcontrol-icon"
                  ref="form"
                  lazy-validation
                >
                  <v-checkbox
                    large
                    v-model="checkbox"
                    :rules="[v => !!v || '']"
                    class="mt-0 pt-0"
                  />
                  <p class="text-start body-2 mb-1">
                    Ich bestätige, dass ich in den letzten 12 Monaten vor
                    Anmeldung
                    <span class="font-weight-black"
                      >nicht länger als 20 Tage arbeitsunfähig</span
                    >
                    krank war.
                  </p>
                </v-form>
                <div v-if="showWarning && !checkbox">
                  <v-container class="px-0 pb-2 text-with-inputcontrol-icon">
                    <v-icon color="red" v-on="on" class="mr-2">mdi-information-outline</v-icon>
                    <p
                      :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-start font-weight-bold mb-0'
                  "
                    >Mehr als 20 Tage arbeitsunfähig</p>
                  </v-container>
                  <p class="text-start body-2 mb-1">
                    Falls Sie die Angaben zum Gesundheitszustand nicht
                    bestätigen können, nutzen Sie bitte den
                    <span class="font-weight-black primary--text"
                      >Antrag mit Gesundheitsfragen</span
                    >.
                  </p>
                </div>
                <v-btn
                  depressed
                  large
                  color="danger"
                  class="mt-6 white--text"
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
  name: "MyHealth",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Mein Gesundheitszustand",
      showWarning: false,
      checkbox: false
    };
  },
  methods: {
    onClickNext() {
      if (this.$refs.form.validate()) {
        this.$router.push({ name: "MyPersonalData" });
      } else {
        this.showWarning = true;
      }
    }
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 40);
  }
};
</script>

<style lang="scss" scoped>
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
