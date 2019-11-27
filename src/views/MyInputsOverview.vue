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
                  <p class="caption text-start mb-1">{{ profile.salutation }}</p>
                  <p class="caption text-start mb-1">{{ profile.title }}</p>
                  <p class="caption text-start mb-1">{{profile.firstGivenName}} {{profile.surname}}</p>
                  <p class="caption text-start mb-1">{{ profile.street }} {{profile.streetNo}}</p>
                  <p class="caption text-start mb-1">{{ profile.postCode}} {{profile.place}}</p>
                  <p class="caption text-start mb-1">{{ profile.phoneNo }}</p>
                  <p class="caption text-start mb-1">{{ profile.emailAddress }}</p>
                  <p class="caption text-start mb-1">{{ profile.professionalActivities }}</p>
                  <p class="caption text-start mb-1">{{ targetDay }}</p>
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
                  <p class="caption text-start mb-1">{{ profile.paymentOption }}</p>
                  <p class="caption text-start mb-1">SEPA Lastschrift</p>
                  <p class="caption text-start mb-1">{{ profile.ibanNumber }}</p>
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
                        <tr
                          v-for="(product, index) in products.filter(product => product.checked)"
                          :key="index"
                        >
                          <td class="text-left">
                            <p
                              class="subtitle-1 pa-0 ma-0 white--text text-start"
                            >{{product.panelTitle}}</p>
                          </td>
                          <td class="text-left">
                            <p
                              class="caption pa-0 ma-0 white--text text-start font-weight-light"
                            >{{getShortName(product.selectedProductName)}}</p>
                          </td>
                          <td class="text-right">
                            <p
                              class="subtitle-1 pa-0 ma-0 white--text font-weight-light"
                            >{{product.selectedRate}} €</p>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <p class="caption white--text text-right mb-3 mt-5 font-weight-light">
                    mtl. Beitrag:
                    <span class="ml-5 subtitle-1 font-weight-bold">{{ totalRate }} €</span>
                  </p>
                  <p
                    class="caption white--text text-right mb-3 mt-2 font-weight-light"
                  >Beginn {{ targetDay }}, Vertragslaufzeit 24 Monate</p>
                </v-card>
                <v-btn
                  depressed
                  large
                  block
                  color="danger"
                  class="mt-7 white--text"
                  @click="onClickNext"
                >
                  Versicherung abschließen
                  <send-icon></send-icon>
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
import SendIcon from "@/components/Icons/SendIcon";

const shortNames = [
  { title: "S1 - 1-Bett-Zimmer", shortName: "S1" },
  { title: "S2 - 2-Bett-Zimmer", shortName: "S2" },
  { title: "Clinic Plus - 2-Bett-Zimmer", shortName: "Clinic Plus" },
  { title: "MediGroup Z Duo", shortName: "Z Duo" },
  { title: "MediGroup A", shortName: "A" },
  { title: "Basis", shortName: "Basis" },
  { title: "Premium", shortName: "Premium" }
];

export default {
  name: "MyInputsOverview",
  components: {
    MainPanel,
    SendIcon
  },
  data() {
    return {
      panelTitle: "Meine Eingaben in der Übersicht",
      showReadMore1: true,
      showReadMore2: true,
      profile: null,
      targetDay: null,
      products: null,
      totalRate: null
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
    },
    getShortName(title) {
      return shortNames.find(item => item.title === title).shortName;
    }
  },
  created() {
    this.profile = this.$store.state.profile.personalData;
    this.products = this.$store.state.products.categories;
    this.totalRate = this.$store.state.products.categories.reduce(
      (totalRate, category) =>
        totalRate + (category.checked ? category.selectedRate : 0),
      0
    );
    this.targetDay = this.$helper.commonHelper.getGermanFormatDate(
      new Date(this.$store.state.profile.targetDay)
    );
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
  background: transparent;
  tr {
    vertical-align: baseline;
  }
  td {
    background-color: #00718f;
    border-bottom: 1px solid white !important;
    padding: 0px;
    padding-top: 24px;
    height: 65px;
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

.send {
    width: 24px;
    height: 18px;
    margin: 0;
    margin-left: 8px;
    margin-bottom: 2px;
}
</style>