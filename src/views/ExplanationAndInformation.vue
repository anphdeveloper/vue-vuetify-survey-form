<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <v-form class="pa-0" ref="personalForm" lazy-validation>
                  <p
                    :class="
                      [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                        ' text-start font-weight-bold mb-3'
                    "
                  >
                    Meine Produktauswahl ohne Beratung online beantragen
                  </p>
                  <div class="text-with-inputcontrol-icon">
                    <v-checkbox
                      large
                      class="mt-0 pt-0"
                      v-model="agreeAdvice"
                      :rules="[v => !!v || '']"
                    />
                    <p class="text-start body-2 mb-1">
                      Ja, ich möchte meine Produktauswahl direkt online
                      beantragen und verzichte auf eine Beratung vor der
                      Antragstellung.
                      <span
                        v-if="showReadMore1"
                        class="text-start body-2 mb-1 primary--text cursor-pointer"
                        @click="onClickShowMore1"
                        >mehr…</span
                      >
                      <span v-if="!showReadMore1">
                        <br />Mir ist klar, dass die Gothaer Allgemeine
                        Versicherung AG und der Vermittler keine Gewähr und
                        Haftung dafür übernehmen, dass das von mir ausgewählte
                        Produkt meinen Wünschen und individuellen Bedürfnissen
                        entspricht. Dies kann sich nachteilig auf die
                        Möglichkeiten auswirken, einen Schadenersatzanspruch
                        wegen einer Verletzung der Beratungspflicht geltend zu
                        machen.
                        <span
                          class="text-start body-2 mb-1 primary--text cursor-pointer"
                          @click="onClickHideMore1"
                          >…weniger</span
                        >
                      </span>
                    </p>
                  </div>
                  <p
                    :class="
                      [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                        ' text-start font-weight-bold mb-1 mt-6'
                    "
                  >
                    Kundeninformationen herunterladen und den Einwilligungen
                    zustimmen
                  </p>
                  <p class="text-start body-2 mb-1">
                    Die Informationen in folgendem PDF Dokument sind für Ihre
                    Unterlagen bestimmt. Bitte laden Sie diese herunter und
                    stimmen darunter dem Erhalt zu. Erst dann erhalten Sie eine
                    Kopie des von Ihnen gestellten Antrages zum Herunterladen.
                  </p>
                  <v-row justify="start" class="px-3 mt-3 mb-2">
                    <v-btn
                      text
                      class="px-3 primary--text body-1 btn-link btn-with-icon"
                      large
                      :ripple="false"
                      @click="onClickDownloadInformation"
                    >
                      <v-icon color="primary" class="mr-2"
                        >mdi-arrow-collapse-down</v-icon
                      >INFORMATIONEN HERUNTERLADEN
                    </v-btn>
                  </v-row>
                  <div class="text-with-inputcontrol-icon">
                    <v-checkbox
                      v-model="agreeTerms"
                      large
                      class="mt-0 pt-0"
                      :rules="[v => !!v || '']"
                    />
                    <p class="text-start body-2 mb-1">
                      <span v-if="!showReadMore2">
                        Kundeninformationen und Hinweise zur Anzeigepflicht und
                        Beratungsverzicht.
                        <br />
                      </span>
                      Ich habe das vorstehend genannte PDF-Dokument „Erklärungen
                      und wichtige Hinweise“ heruntergeladen.
                      <span
                        v-if="showReadMore2"
                        class="text-start body-2 mb-1 primary--text cursor-pointer"
                        @click="onClickShowMore2"
                        >mehr…</span
                      >
                      <span v-if="!showReadMore2">
                        Diese enthalten u.a. die Belehrung zur vorvertraglichen
                        Anzeigepflicht, zum Widerrufsrecht und zum
                        Beratungsverzicht. Die Belehrung zur vorvertraglichen
                        Anzeigepflicht und zum Widerrufsrecht sind wichtiger
                        Bestandteil des Vertrages. Ich mache diese Belehrungen
                        zum Inhalt meines Antrages. Ich halte mich an meinen
                        Antrag einen Monat ( 6 Wochen in der
                        Krankenversicherung) gebunden. Mein Widerrufsrecht
                        bleibt hiervon unberührt.
                        <span
                          class="text-start body-2 mb-1 primary--text cursor-pointer"
                          @click="onClickHideMore2"
                          >…weniger</span
                        >
                      </span>
                    </p>
                  </div>
                </v-form>
                <v-btn
                  depressed
                  large
                  color="danger"
                  :block="$vuetify.breakpoint.xs"
                  class="mt-7 white--text"
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
import { INFORMATION_LINK } from "@/plugins/constants/products";
export default {
  name: "ExplanationAndInformation",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Erklärungen und wichtige Hinweise",
      agreeAdvice: false,
      agreeTerms: false,
      showReadMore1: true,
      showReadMore2: true
    };
  },
  watch: {},
  methods: {
    onClickNext() {
      if (this.$refs.personalForm.validate()) {
        this.$store.dispatch("profile/setPersonalData", {
          agreeAdvice: this.agreeAdvice,
          agreeTerms: this.agreeTerms
        });

        this.$router.push({ name: "MyInputsOverview" });
      } else {
        console.log("validation failed");
      }
    },
    onClickShowMore1() {
      this.showReadMore1 = false;
    },
    onClickHideMore1() {
      this.showReadMore1 = true;
    },
    onClickShowMore2() {
      this.showReadMore2 = false;
    },
    onClickHideMore2() {
      this.showReadMore2 = true;
    },
    onClickDownloadInformation() {
      window.open(INFORMATION_LINK);
    },
    fillData() {
      this.agreeAdvice = this.$store.state.profile.personalData.agreeAdvice;
      this.agreeTerms = this.$store.state.profile.personalData.agreeTerms;
    }
  },
  created() {
    this.fillData();
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 92);
  }
};
</script>

<style lang="scss">
.btn-with-icon {
  span {
    width: 100%;
    white-space: pre-wrap;
  }
}
</style>
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
