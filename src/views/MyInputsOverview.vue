<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <div class="d-flex justify-space-between">
                  <p class="subtitle-1 text-start mb-3">Persönliche Daten</p>
                  <v-btn text icon color="primary" @click="showReadMore1=!showReadMore1">
                    <v-icon v-if="showReadMore1">mdi-plus</v-icon>
                    <v-icon v-if="!showReadMore1">mdi-minus</v-icon>
                  </v-btn>
                </div>
                <div class="my-4 detailed-info" v-if="!showReadMore1">
                  <p class="caption text-start mb-1">Frau</p>
                  <p class="caption text-start mb-1">-</p>
                  <p class="caption text-start mb-1">Martina Gesund</p>
                  <p class="caption text-start mb-1">Gesundheitsstr. 23</p>
                  <p class="caption text-start mb-1">50678 Köln</p>
                  <p class="caption text-start mb-1">0179 555 555 69</p>
                  <p class="caption text-start mb-1">martina.gesund@outlook.de</p>
                  <p class="caption text-start mb-1">Service Manager</p>
                  <p class="caption text-start mb-1">01.01.2019</p>
                  <v-btn text icon color="primary" class="edit-button" @click="gotoMyPersonalData">
                    <v-icon small>mdi-pencil-outline</v-icon>
                  </v-btn>
                </div>
                <v-divider class="mb-5" />
                <div class="d-flex justify-space-between">
                  <p class="subtitle-1 text-start mb-3">Zahlweise</p>
                  <v-btn text icon color="primary" @click="showReadMore2=!showReadMore2">
                    <v-icon v-if="showReadMore2">mdi-plus</v-icon>
                    <v-icon v-if="!showReadMore2">mdi-minus</v-icon>
                  </v-btn>
                </div>
                <div class="my-4 detailed-info" v-if="!showReadMore2">
                  <p class="caption text-start mb-1">Jährlich</p>
                  <p class="caption text-start mb-1">SEPA Lastschrift</p>
                  <p class="caption text-start mb-1">Commerzbank</p>
                  <p class="caption text-start mb-1">DE12500105170648489890</p>
                  <v-btn text icon color="primary" class="edit-button" @click="gotoMyPaymentMethod">
                    <v-icon small>mdi-pencil-outline</v-icon>
                  </v-btn>
                </div>
                <v-divider class="mb-5" />
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-start font-weight-bold mb-3'
                  "
                >Vertragsrelevante Unterlagen für Sie:</p>
                <v-row justify="start" class="px-3 mt-3 mb-2">
                  <v-btn
                    text
                    class="px-3 primary--text subtitle-1 btn-link btn-with-icon"
                    large
                    :ripple="false"
                    @click="showDialog = true"
                  >
                    <v-icon color="primary" class="mr-2">mdi-arrow-collapse-down</v-icon>MediGroup Stationär S1
                  </v-btn>
                </v-row>
                <v-row justify="start" class="px-3 mt-3 mb-2">
                  <v-btn
                    text
                    class="px-3 primary--text subtitle-1 btn-link btn-with-icon"
                    large
                    :ripple="false"
                    @click="showDialog = true"
                  >
                    <v-icon color="primary" class="mr-2">mdi-arrow-collapse-down</v-icon>MediGroup Zahn Z Duo
                  </v-btn>
                </v-row>
                <v-card color="primary" class="elevation-0 white--text px-5 pb-2 mt-7" tile>
                  <v-simple-table class="overview">
                    <template v-slot:default>
                      <tbody>
                        <!-- <tr v-for="item in desserts" :key="item.name"> -->
                        <tr>
                          <td class="text-left">
                            <p class="subtitle-1 white--text text-start mb-4 mt-5 pb-2">Stationär</p>
                          </td>
                          <td class="text-left">
                            <p class="caption white--text text-start mb-3 mt-5 font-weight-light">S1</p>
                          </td>
                          <td class="text-right">
                            <p class="subtitle-1 white--text mb-4 mt-5 font-weight-light">17,96 €</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">
                            <p class="subtitle-1 white--text text-start mb-4 mt-5">Stationär</p>
                          </td>
                          <td class="text-left">
                            <p class="caption white--text text-start mb-3 mt-5 font-weight-light">S1</p>
                          </td>
                          <td class="text-right">
                            <p class="subtitle-1 white--text mb-4 mt-5 font-weight-light">17,96 €</p>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <p class="caption white--text text-right mb-3 mt-5 font-weight-light">
                    mtl. Beitrag:
                    <span class="ml-5 subtitle-1">35,72 €</span>
                  </p>
                  <p
                    class="caption white--text text-right mb-3 mt-2 font-weight-light"
                  >Beginn 01.12.2019, Vertragslaufzeit 24 Monate</p>
                </v-card>
                <v-btn
                  :disabled="showInsureWarningForPrivate"
                  depressed
                  large
                  color="danger"
                  class="mt-7 white--text"
                  @click="onClickNext"
                >
                  Versicherung abschließen
                  <v-icon color="primary" class="mr-2"></v-icon>
                </v-btn>
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
  name: "MyInputsOverview",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Meine Eingaben in der Übersicht",
      showReadMore1: true,
      showReadMore2: true
    };
  },
  watch: {},
  methods: {
    onClickNext() {
      this.$router.push({ name: "ManyThanks" });
    },
    gotoMyPersonalData() {
        this.$router.push({ name: "MyPersonalData" });
    },
    gotoMyPaymentMethod() {
        this.$router.push({ name: "MyPaymentMethod" });
    }
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 85);
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
.overview {
  td {
    background-color: #00718f;
    border-bottom: 1px solid white !important;
    padding: 0;
  }
}
.detailed-info {
  position: relative;
}
.edit-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>