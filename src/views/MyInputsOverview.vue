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
                  <v-btn
                    text
                    icon
                    color="primary"
                    @click="showReadMore1 = !showReadMore1"
                  >
                    <v-icon v-if="showReadMore1">mdi-plus</v-icon>
                    <v-icon v-if="!showReadMore1">mdi-minus</v-icon>
                  </v-btn>
                </div>
                <div class="my-4 detailed-info" v-if="!showReadMore1">
                  <p class="caption text-start mb-1">
                    {{ profile.salutation }}
                  </p>
                  <p class="caption text-start mb-1">{{ profile.title }}</p>
                  <p class="caption text-start mb-1">
                    {{ profile.firstGivenName }} {{ profile.surname }}
                  </p>
                  <p class="caption text-start mb-1">
                    {{ profile.street }} {{ profile.streetNo }}
                  </p>
                  <p class="caption text-start mb-1">
                    {{ profile.postCode }} {{ profile.place }}
                  </p>
                  <p class="caption text-start mb-1">{{ profile.phoneNo }}</p>
                  <p class="caption text-start mb-1">
                    {{ profile.emailAddress }}
                  </p>
                  <p class="caption text-start mb-1">
                    {{ profile.professionalActivities }}
                  </p>
                  <p class="caption text-start mb-1">{{ targetDay }}</p>
                  <v-btn
                    text
                    icon
                    color="primary"
                    class="edit-button"
                    @click="gotoMyPersonalData"
                  >
                    <v-icon small>mdi-pencil-outline</v-icon>
                  </v-btn>
                </div>
                <v-divider class="mb-5" />
                <div class="d-flex justify-space-between">
                  <p class="subtitle-1 text-start mb-3">Zahlweise</p>
                  <v-btn
                    text
                    icon
                    color="primary"
                    @click="showReadMore2 = !showReadMore2"
                  >
                    <v-icon v-if="showReadMore2">mdi-plus</v-icon>
                    <v-icon v-if="!showReadMore2">mdi-minus</v-icon>
                  </v-btn>
                </div>
                <div class="my-4 detailed-info" v-if="!showReadMore2">
                  <p class="caption text-start mb-1">
                    {{ profile.paymentOption }}
                  </p>
                  <p class="caption text-start mb-1">SEPA Lastschrift</p>
                  <p class="caption text-start mb-1">
                    {{ profile.ibanNumber }}
                  </p>
                  <v-btn
                    text
                    icon
                    color="primary"
                    class="edit-button"
                    @click="gotoMyPaymentMethod"
                  >
                    <v-icon small>mdi-pencil-outline</v-icon>
                  </v-btn>
                </div>
                <v-divider class="mb-5" />
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-start font-weight-bold mb-3'
                  "
                >
                  Vertragsrelevante Unterlagen für Sie:
                </p>
                <v-row
                  justify="start"
                  class="px-3 mt-3 mb-2"
                  v-for="(product, index) in products.filter(
                    product => product.checked
                  )"
                  :key="index"
                >
                  <v-btn
                    text
                    class="px-3 primary--text subtitle-1 btn-link btn-with-icon"
                    large
                    :ripple="false"
                    @click="
                      onClickProductPdfLink(product.selectedProductPdfLink)
                    "
                  >
                    <v-icon color="primary" class="mr-2"
                      >mdi-arrow-collapse-down</v-icon
                    >
                    MediGroup {{ product.panelTitle }}
                    {{ getShortName(product.selectedProductName) }}
                  </v-btn>
                </v-row>

                <v-card
                  color="primary"
                  class="elevation-0 white--text px-5 pb-2 mt-7"
                  tile
                >
                  <v-simple-table class="overview">
                    <template v-slot:default>
                      <tbody>
                        <!-- <tr v-for="item in desserts" :key="item.name"> -->
                        <tr
                          v-for="(product, index) in products.filter(
                            product => product.checked
                          )"
                          :key="index"
                        >
                          <td class="text-left">
                            <p
                              class="subtitle-1 pa-0 ma-0 white--text text-start"
                            >
                              {{ product.panelTitle }}
                            </p>
                          </td>
                          <td class="text-left">
                            <p
                              class="caption pa-0 ma-0 white--text text-start font-weight-light"
                            >
                              {{ getShortName(product.selectedProductName) }}
                            </p>
                          </td>
                          <td class="text-right">
                            <p
                              class="subtitle-1 pa-0 ma-0 white--text font-weight-light"
                            >
                              {{
                                $helper.commonHelper.germanFormat(
                                  (
                                    product.selectedRate *
                                    getRateByOption(profile.paymentOption)
                                  ).toFixed(2)
                                )
                              }}
                              €
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <p
                    class="caption white--text text-right mb-3 mt-5 font-weight-light"
                  >
                    {{ getOptionDesc(profile.paymentOption) }}
                    <span class="ml-5 subtitle-1 font-weight-bold">
                      {{
                        $helper.commonHelper.germanFormat(totalRate.toFixed(2))
                      }}
                      €
                    </span>
                  </p>
                  <p
                    class="caption white--text text-right mb-3 mt-2 font-weight-light"
                  >
                    Beginn {{ targetDay }}, Vertragslaufzeit 24 Monate
                  </p>
                </v-card>
                <v-btn
                  depressed
                  large
                  :disabled="isSendData"
                  block
                  color="danger"
                  class="mt-7 white--text"
                  @click="onClickNext"
                >
                  Versicherung abschlie
                  <span class="not-uppercase">ß</span>en
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

const paymentOptionsInfo = [
  { option: "monatlich", meaning: "Monat", desc: "mtl. Beitrag", rate: 1 },
  {
    option: "1/4 jährlich",
    meaning: "Vierteljahr",
    desc: "vierteljährl. Beitrag",
    rate: 3
  },
  {
    option: "1/2 jährlich",
    meaning: "Halbjahr",
    desc: "halbjährl. Beitrag",
    rate: 6
  },
  {
    option: "jährlich (4% Nachlass)",
    meaning: "Jahr",
    desc: "jährl. Beitrag",
    rate: 12 * 0.96
  }
];

import {
  BKV_AGENT,
  BKV_KOLLEKTIV,
  BKV_COMPANYNAME,
  BKV_REASON
} from "@/plugins/constants/common";

export default {
  name: "MyInputsOverview",
  components: {
    MainPanel,
    SendIcon,
  },
  data() {
    return {
      panelTitle: "Meine Eingaben in der Übersicht",
      showReadMore1: true,
      showReadMore2: true,
      profile: null,
      targetDay: null,
      dateOfBirth: null,
      prevCompany: null,
      missedTeeth: null,
      products: null,
      totalRate: null,
      isSendData: false,
    };
  },
  watch: {},
  methods: {
    /*eslint-disable*/
    onClickNext() {
      //test calling side-effect api
      // this.$store.dispatch("callBackendService", {
      //   hello: "test"
      // });
      this.isSendData = true;
      this.$store.dispatch('getIpAddress').then(ipAddress => {
        if (ipAddress) {
          let payload = {
            //hidden form static data
            bkv_agent: BKV_AGENT,
            bkv_kollektiv: BKV_KOLLEKTIV,
            bkv_companyname: BKV_COMPANYNAME,
            bkv_reason: BKV_REASON,

            //ip, timestamp
            customer_SEPA_IP: ipAddress,
            customer_SEPA_DATETIME: new Date(),

            //user form
            customer_title: this.profile.title || '',
            customer_name: this.profile.firstGivenName || '',
            customer_lastname: this.profile.surname || '',
            customer_street: this.profile.street || '',
            customer_housenumber: this.profile.streetNo,
            customer_gender: this.profile.salutation || '',
            customer_PLZ: this.profile.postCode || '',
            customer_city: this.profile.place || '',
            customer_birthdate: this.dateOfBirth,
            customer_startdate: this.profile.settingDate || "",
            customer_GKV: this.profile.insuredOption === "0",
            customer_phone: this.profile.phoneNo || "",
            customer_email: this.profile.emailAddress || "",
            customer_role: this.profile.professionalActivities || "",
            customer_iban: this.profile.ibanNumber || "",
            customer_SEPA: this.profile.agreeSEPA,
            customer_SEPA_period: this.profile.paymentOption,
            check_noadvice: this.profile.agreeAdvice,
            check_terms: this.profile.agreeTerms,
            insurance_startdate: this.targetDay,
            insurance_product_a:
              this.products[2].checked && this.products[2].selectedId == 0
                ? this.products[2].selectedRate.toFixed(2).toString()
                : '',
            insurance_product_z:
              this.products[1].checked && this.products[1].selectedId == 0
                ? this.products[1].selectedRate.toFixed(2).toString()
                : '',
            insurance_product_vb:
              this.products[3].checked && this.products[3].selectedId == 0
                ? this.products[3].selectedRate.toFixed(2).toString()
                : '',
            insurance_product_vp:
              this.products[3].checked && this.products[3].selectedId == 1
                ? this.products[3].selectedRate.toFixed(2).toString()
                : '',
            insurance_product_s1:
              this.products[0].checked && this.products[0].selectedId == 0
                ? this.products[0].selectedRate.toFixed(2).toString()
                : '',
            insurance_product_s2:
              this.products[0].checked && this.products[0].selectedId == 1
                ? this.products[0].selectedRate.toFixed(2).toString()
                : '',
            insurance_product_sc:
              this.products[0].checked && this.products[0].selectedId == 2
                ? this.products[0].selectedRate.toFixed(2).toString()
                : '',
            insurance_question_AU: this.profile.agreeForLastYear || false,
            insurance_question_Z: this.missedTeeth,
            insurance_prior: this.prevCompany.haveCompany,
            insurance_oldname: this.prevCompany.haveCompany
              ? this.prevCompany.companyName
              : '',
          };

          this.$store
            .dispatch('callBackendService', {
              data: payload,
            })
            .then(res => {
              if (res) {
                this.isSendData = false;
                this.$store.dispatch('initiateState');
                this.$router.push({ name: 'ManyThanks' });
              }
              else
                this.isSendData = false;
                console.log('backend error');
            });
        }
      });
    },
    gotoMyPersonalData() {
      this.$router.push({ name: 'MyPersonalData' });
    },
    gotoMyPaymentMethod() {
      this.$router.push({ name: 'MyPaymentMethod' });
    },
    getShortName(title) {
      return shortNames.find(item => item.title === title).shortName;
    },
    onClickProductPdfLink(link) {
      console.log(link);
      window.open(link);
    },
    getOptionDesc(option) {
      return paymentOptionsInfo.find(item => item.option === option).desc;
    },
    getRateByOption(option) {
      return paymentOptionsInfo.find(item => item.option === option).rate;
    },
    fillData() {
      this.profile = this.$store.state.profile.personalData;

      this.products = this.$store.state.products.categories;
      console.log(this.products);
      this.totalRate =
        this.getRateByOption(this.profile.paymentOption) *
        this.$store.state.products.categories.reduce(
          (totalRate, category) =>
            totalRate + (category.checked ? category.selectedRate : 0),
          0,
        );
      this.targetDay = this.$helper.commonHelper.getGermanFormatDate(
        new Date(this.$store.state.profile.targetDay),
      );
      this.dateOfBirth = this.$helper.commonHelper.getGermanFormatDate(
        new Date(this.$store.state.profile.dayOfBirth),
      );
      this.prevCompany = this.$store.state.profile.prevInsCompany;
      this.missedTeeth = this.$store.state.profile.missedTeeth;
    },
  },
  created() {
    this.fillData();
  },
  mounted() {
    this.$store.dispatch('setPagesProgress', 85);
  },
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

.not-uppercase {
  text-transform: none;
}
</style>
