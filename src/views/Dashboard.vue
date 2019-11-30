<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="12" xs="12" class="mt-10">
      <v-layout column wrap>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <h2>Ihre betriebliche Gesundheitsförderung</h2>
            <p class="pb-0 mb-0 mt-4 text-start body-1 font-meta-pro">
              Versicherungsbeginn
            </p>
            <v-select
              class="mt-0 pt-0 meta-pro-text primary--text title"
              :items="days"
              v-model="targetDay"
              append-icon="mdi-chevron-down"
              color="primary"
              :rules="[v => !!v || '']"
            ></v-select>
          </v-col>
        </v-row>

        <v-row justify="center" v-if="$vuetify.breakpoint.mdAndUp">
          <v-col
            cols="12"
            md="3"
            sm="6"
            xs="12"
            v-for="(panel, index) in categoryPanelData"
            :key="index"
          >
            <category-panel
              :categoryPanelData="panel"
              :checkPanel="selectPanels"
              :expandPanel="expandCategoryPanel"
            ></category-panel>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :categoryPanelData="categoryPanelData[0]"
              :checkPanel="selectPanels"
              :expandPanel="expandCategoryPanel"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <div
              v-if="
                (categoryPanelData[0].expanded &&
                  $vuetify.breakpoint.smAndDown) ||
                  $vuetify.breakpoint.mdAndUp
              "
            >
              <rate-selection-panel
                v-for="(ratePanel, index) in stationaryPanelData"
                :key="index"
                :ratePanelData="ratePanel"
                :checkRate="selectStationaryRatePanel"
                :class="{ 'mt-4': ratePanel.id !== 0 }"
              >
                <template v-slot v-if="ratePanel.id == 2">
                  <p class="pb-2 text-left pl-4 ml-1 mb-0">
                    <v-icon color="primary">mdi-check</v-icon>
                    <span class="grey--text">stabile Beiträge</span>
                    <v-menu
                      offset-y
                      allow-overflow
                      max-width="300"
                      nudge-left="138"
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
                            <v-col
                              cols="10"
                              sm="10"
                              class="ml-0 pl-0 text-left"
                            >
                              <p class="text-left white--text mb-0 body-2">
                                <b>Tarif mit Alterungsrückstellung:</b>
                                <br />Sie zahlen zu Beginn höhere Beiträge und
                                sparen so Guthaben fürs Alter an.
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
                    <!-- <v-tooltip
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
                              <b>Tarif mit Alterungsrückstellung:</b>
                              <br />Sie zahlen zu Beginn höhere Beiträge und
                              sparen so Guthaben fürs Alter an.
                            </p>
                            <p class="text-left white--text mb-1">
                              <b>MEHR ></b>
                            </p>
                          </v-col>
                        </v-layout>
                      </v-card>
                    </v-tooltip>-->
                  </p>
                </template>
              </rate-selection-panel>
              <v-layout justify-start class="pt-2">
                <comparison-table-modal
                  :isComparisonForStationary="true"
                ></comparison-table-modal>
              </v-layout>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :categoryPanelData="categoryPanelData[1]"
              :checkPanel="selectPanels"
              :expandPanel="expandCategoryPanel"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <div
              v-if="
                (categoryPanelData[1].expanded &&
                  $vuetify.breakpoint.smAndDown) ||
                  $vuetify.breakpoint.mdAndUp
              "
            >
              <rate-selection-panel
                v-for="(ratePanel, index) in toothPanelData"
                :key="index"
                :ratePanelData="ratePanel"
                :checkRate="selectToothRatePanel"
                :class="{ 'mt-4': ratePanel.id !== 0 }"
              ></rate-selection-panel>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :categoryPanelData="categoryPanelData[2]"
              :checkPanel="selectPanels"
              :expandPanel="expandCategoryPanel"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <div
              v-if="
                (categoryPanelData[2].expanded &&
                  $vuetify.breakpoint.smAndDown) ||
                  $vuetify.breakpoint.mdAndUp
              "
            >
              <rate-selection-panel
                v-for="(ratePanel, index) in outpatientPanelData"
                :key="index"
                :ratePanelData="ratePanel"
                :checkRate="selectOutpatientRatePanel"
                :class="{ 'mt-4': ratePanel.id !== 0 }"
              ></rate-selection-panel>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :categoryPanelData="categoryPanelData[3]"
              :checkPanel="selectPanels"
              :expandPanel="expandCategoryPanel"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <div
              v-if="
                (categoryPanelData[3].expanded &&
                  $vuetify.breakpoint.smAndDown) ||
                  $vuetify.breakpoint.mdAndUp
              "
            >
              <rate-selection-panel
                v-for="(ratePanel, index) in preventionPanelData"
                :key="index"
                :ratePanelData="ratePanel"
                :checkRate="selectPreventionRatePanel"
                :class="{ 'mt-4': ratePanel.id !== 0 }"
              ></rate-selection-panel>
              <v-layout justify-start class="pt-2">
                <comparison-table-modal
                  :isComparisonForStationary="false"
                ></comparison-table-modal>
              </v-layout>
            </div>
          </v-col>
        </v-row>
      </v-layout>
      <v-layout column wrap>
        <v-row class="white mx-0 py-0" align="center" style="height: 50px;">
          <middle-title-panel
            panelBackground="white"
            leftTitle="mtl. Gesamt-Beitrag"
            :middleTitle="$helper.commonHelper.germanFormat(totalRate) + '€'"
            leftTitleClass="subtitle-1 font-weight-bold grey--text text--darken-3 pl-4"
            middleTitleClass="subtitle-1 font-weight-bold grey--text text--darken-3"
          ></middle-title-panel>
        </v-row>
        <v-row justify="center">
          <v-col class="justify-center align-center">
            <v-btn
              depressed
              large
              color="danger"
              class="mt-4 white--text"
              :block="$vuetify.breakpoint.xs"
              @click="onClickContinueWithSelection"
              >MIT AUSWAHL FORTFAHREN</v-btn
            >
          </v-col>
        </v-row>
        <v-row
          :class="{
            'mt-4': $vuetify.breakpoint.xs,
            'px-3 justify-start': true
          }"
          wrap
        >
          <v-btn
            text
            class="px-3 primary--text body-1 btn-link"
            :ripple="false"
            @click="onClickGoBack"
          >
            <go-back-icon
              color="primary"
              v-if="$vuetify.breakpoint.mdAndUp"
            ></go-back-icon>
            <go-back-circle-icon
              v-if="$vuetify.breakpoint.smAndDown"
            ></go-back-circle-icon>
            <span v-if="$vuetify.breakpoint.mdAndUp">ZURÜCK</span>
          </v-btn>
        </v-row>
      </v-layout>
    </v-col>
  </v-layout>
</template>

<script>
import CategoryPanel from "@/components/CategoryPanel.vue";
import RateSelectionPanel from "@/components/RateSelectionPanel.vue";
import MiddleTitlePanel from "@/components/MiddleTitlePanel";
import ComparisonTableModal from "@/components/Modals/ComparisonTableModal";
import GoBackCircleIcon from "@/components/Icons/GoBackCircleIcon";
import GoBackIcon from "@/components/Icons/GoBackIcon";
import { mapState } from "vuex";
import {
  CATEGORY_PANEL_DATA,
  STATIONARY_PANEL_DATA,
  TOOTH_PANEL_DATA,
  OUTPATIENT_PANEL_DATA,
  PREVENTION_PANEL_DATA
} from "@/plugins/constants/products";
export default {
  name: "Dashboard",
  components: {
    CategoryPanel,
    RateSelectionPanel,
    MiddleTitlePanel,
    ComparisonTableModal,
    GoBackCircleIcon,
    GoBackIcon
  },
  props: {},
  data() {
    return {
      days: null,
      targetDay: null,
      totalRate: 0,
      categoryPanelData: CATEGORY_PANEL_DATA,
      stationaryPanelData: STATIONARY_PANEL_DATA,
      toothPanelData: TOOTH_PANEL_DATA,
      outpatientPanelData: OUTPATIENT_PANEL_DATA,
      preventionPanelData: PREVENTION_PANEL_DATA
    };
  },
  computed: {
    ...mapState({
      age: state => state.profile.age,
    })
  },
  watch: {
    targetDay: function(newVal) {
      this.$store.dispatch(
        "profile/setTargetDay",
        this.$helper.commonHelper.getDateFromGermanDate(newVal)
      );
    },
    age: function(newVal) {
      this.setRateForPanels(newVal);
    },

    stationaryPanelData: {
      handler() {
        this.setTotalRate();
      },
      deep: true
    },
    toothPanelData: {
      handler() {
        this.setTotalRate();
      },
      deep: true
    },
    outpatientPanelData: {
      handler() {
        this.setTotalRate();
      },
      deep: true
    },
    preventionPanelData: {
      handler() {
        this.setTotalRate();
      },
      deep: true
    }
  },

  methods: {
    selectPanels(id) {
      console.log('selectedPannel is called');
      this.categoryPanelData[id].checked = !this.categoryPanelData[id].checked;
      if (!this.categoryPanelData[id].checked) {
        this.categoryPanelData[id].selectedId = null;
        this.categoryPanelData[id].selectedProductName = "";
        this.categoryPanelData[id].selectedProductPdfLink = "";
        this.categoryPanelData[id].selectedRate = 0;
        switch (id) {
          case 0: {
            this.stationaryPanelData = this.stationaryPanelData.map(panel => {
              return { ...panel, checked: false };
            });
            break;
          }
          case 1: {
            this.toothPanelData = this.toothPanelData.map(panel => {
              return { ...panel, checked: false };
            });
            break;
          }
          case 2: {
            this.outpatientPanelData = this.outpatientPanelData.map(panel => {
              return { ...panel, checked: false };
            });
            break;
          }
          case 3: {
            this.preventionPanelData = this.preventionPanelData.map(panel => {
              return { ...panel, checked: false };
            });
            break;
          }
        }
      } else {
        switch (id) {
          case 0: {
            this.selectStationaryRatePanel(0);
            break;
          }
          case 1: {
            this.selectToothRatePanel(0);
            break;
          }
          case 2: {
            this.selectOutpatientRatePanel(0);
            break;
          }
          case 3: {
            this.selectPreventionRatePanel(0);

            break;
          }
        }
      }
    },

    selectStationaryRatePanel(id) {
      this.stationaryPanelData.map(
        item => (item.checked = (item.id === id) ? true : false)
      );
      this.categoryPanelData[0].checked = true;
      this.categoryPanelData[0].selectedId = id;
      this.categoryPanelData[0].selectedProductName = this.stationaryPanelData[
        id
      ].panelTitle;
      this.categoryPanelData[0].selectedRate = this.stationaryPanelData[
        id
      ].panelRate;
      this.categoryPanelData[0].selectedProductPdfLink = this.stationaryPanelData[
        id
      ].pdfLink;
    },

    selectToothRatePanel(id) {
      this.toothPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
      this.categoryPanelData[1].checked = true;
      this.categoryPanelData[1].selectedId = id;
      this.categoryPanelData[1].selectedProductName = this.toothPanelData[
        id
      ].panelTitle;
      this.categoryPanelData[1].selectedRate = this.toothPanelData[
        id
      ].panelRate;
      this.categoryPanelData[1].selectedProductPdfLink = this.toothPanelData[
        id
      ].pdfLink;
    },

    selectOutpatientRatePanel(id) {
      this.outpatientPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
      this.categoryPanelData[2].checked = true;
      this.categoryPanelData[2].selectedId = id;
      this.categoryPanelData[2].selectedProductName = this.outpatientPanelData[
        id
      ].panelTitle;
      this.categoryPanelData[2].selectedRate = this.outpatientPanelData[
        id
      ].panelRate;
      this.categoryPanelData[2].selectedProductPdfLink = this.outpatientPanelData[
        id
      ].pdfLink;
    },

    selectPreventionRatePanel(id) {
      this.preventionPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
      this.categoryPanelData[3].checked = true;
      this.categoryPanelData[3].selectedId = id;
      this.categoryPanelData[3].selectedProductName = this.preventionPanelData[
        id
      ].panelTitle;
      this.categoryPanelData[3].selectedRate = this.preventionPanelData[
        id
      ].panelRate;
      this.categoryPanelData[3].selectedProductPdfLink = this.preventionPanelData[
        id
      ].pdfLink;
    },

    expandCategoryPanel(id, expanded) {
      this.categoryPanelData.map(
        category =>
          (category.expanded =
            category.id === id ? expanded : category.expanded)
      );
    },
    /*eslint-disable*/
    onClickContinueWithSelection() {
      if (!this.categoryPanelData.find(data => data.checked)) {
        return;
      } else {
        this.$store.dispatch('products/setCategories', this.categoryPanelData);
        if (
          this.$store.state.products.categories[0].checked ||
          this.$store.state.products.categories[2].checked
        ) {
          this.$router.push({ name: 'MyHealth' });
        } else if (this.$store.state.products.categories[1].checked) {
          this.$router.push({ name: 'MyDentalHealth' });
        } else if (this.$store.state.products.categories[3].checked) {
          this.$router.push({ name: 'MyPersonalData' });
        }
      }
    },
    /*eslint-enable*/

    setRateForPanels(age) {
      this.stationaryPanelData = this.stationaryPanelData.map(panel => {
        return {
          ...panel,
          panelRate: this.$helper.productHelper.getRateForStationary(
            age,
            panel.id
          )
        };
      });
      this.toothPanelData = this.toothPanelData.map(panel => {
        return {
          ...panel,
          panelRate: this.$helper.productHelper.getRateForTooth(age, panel.id)
        };
      });
      this.outpatientPanelData = this.outpatientPanelData.map(panel => {
        return {
          ...panel,
          panelRate: this.$helper.productHelper.getRateForOutpatient(
            age,
            panel.id
          )
        };
      });
      this.preventionPanelData = this.preventionPanelData.map(panel => {
        return {
          ...panel,
          panelRate: this.$helper.productHelper.getRateForPrevention(
            age,
            panel.id
          )
        };
      });
    },
    setTotalRate() {
      this.preventionPanelData.reduce(
        (totalRate, panel) => totalRate + (panel.checked ? panel.panelRate : 0),
        0
      );
      this.totalRate =
        this.stationaryPanelData.reduce(
          (totalRate, panel) =>
            totalRate + (panel.checked ? panel.panelRate : 0),
          0
        ) +
        this.toothPanelData.reduce(
          (totalRate, panel) =>
            totalRate + (panel.checked ? panel.panelRate : 0),
          0
        ) +
        this.outpatientPanelData.reduce(
          (totalRate, panel) =>
            totalRate + (panel.checked ? panel.panelRate : 0),
          0
        ) +
        this.preventionPanelData.reduce(
          (totalRate, panel) =>
            totalRate + (panel.checked ? panel.panelRate : 0),
          0
        );
    },
    onClickGoBack() {
      this.$router.go(-1);
    },
    clickReadMore() {
      window.open("/pdfs/Altersrueckstellung_Information.pdf", "_blank");
    },
    fillData() {
      //set first days of next months
      this.days = this.$helper.commonHelper
        .getFirstDayOfMonth()
        .map(date => this.$helper.commonHelper.getGermanFormatDate(date));
      if (this.days && this.days.length != 0) {
        this.targetDay = this.days[0];
      }

      //setCategories
      if (this.$store.state.products.categories) {

        this.categoryPanelData = this.$store.state.products.categories;
        this.categoryPanelData.forEach(category => {
          if (category.checked) {
            switch (category.id) {
              case 0:
                this.stationaryPanelData.forEach( productPanel => {
                  productPanel.checked = (productPanel.id == category.selectedId) ? true : false;
                });
                break;
              case 1:
                this.toothPanelData.forEach( productPanel => {
                  productPanel.checked = (productPanel.id == category.selectedId) ? true : false;
                });
                break;
              case 2:
                this.outpatientPanelData.forEach( productPanel => {
                  productPanel.checked = (productPanel.id == category.selectedId) ? true : false;
                });
                break;
              case 3:
                this.preventionPanelData.forEach( productPanel => {
                  productPanel.checked = (productPanel.id == category.selectedId) ? true : false;
                });
                break;
            }
          }
          else{
            switch (category.id) {
              case 0:
                this.stationaryPanelData.forEach( productPanel => {
                  productPanel.checked = false;
                });
                break;
              case 1:
                this.toothPanelData.forEach( productPanel => {
                  productPanel.checked = false;
                });
                break;
              case 2:
                this.outpatientPanelData.forEach( productPanel => {
                  productPanel.checked = false;
                });
                break;
              case 3:
                this.preventionPanelData.forEach( productPanel => {
                  productPanel.checked = false;
                });
                break;
            }
          }
        });
      }

      //set rate
      this.setRateForPanels(this.age);
    }
  },
  created(){
    this.fillData();
  },

  mounted() {
    //set progress
    this.$store.dispatch("setPagesProgress", 25);
  }
};
</script>
<style scoped lang="scss">
.plan-compare-table {
  th {
    background: #00718f;
    border: 0.5px solid #ced4da;
    color: white !important;
    font-size: 1em;
    &:first-child {
      background: white;
      border: unset;
    }
    &:not(first-child) {
      width: 15%;
    }
  }
  tr {
    td {
      border: 0.5px solid #ced4da;
      &:first-child {
        background: #ccc;
      }
    }
  }
}
</style>
