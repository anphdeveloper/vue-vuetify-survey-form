<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="9" xs="12" class="mt-10">
      <v-layout column wrap>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <h2>Ihre betriebliche Gesundheitsförderung</h2>
            <p class="pb-0 mb-0 mt-4 text-start caption">Geburtsdatum</p>
            <v-select
              class="mt-0 pt-0 meta-pro-text primary--text"
              :items="days"
              v-model="days[0]"
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
            <div v-if="(categoryPanelData[0].expanded && $vuetify.breakpoint.smAndDown)|| $vuetify.breakpoint.mdAndUp">
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
                            <v-icon color="white"
                              >mdi-information-outline</v-icon
                            >
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
                    </v-tooltip>
                  </p>
                </template>
              </rate-selection-panel>
              <v-layout justify-start class="pt-2">
                <v-dialog v-model="dialogStationary" width="900">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      class="px-3 primary--text body-1 btn-link"
                      large
                      :ripple="false"
                      v-on="on"
                    >
                      <v-icon color="primary">mdi-arrow-right</v-icon>TARIFE
                      VERGLEICHEN
                    </v-btn>
                  </template>

                  <v-card>
                    <div class="px-2 pt-2">
                      <v-btn
                        absolute
                        icon
                        right
                        small
                        @click="dialogStationary = false"
                      >
                        <v-icon color="primary">mdi-close</v-icon>
                      </v-btn>
                    </div>
                    <v-card-text class="pt-10">
                      <v-simple-table class="plan-compare-table">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left"></th>
                              <th class="text-center">Medigroup S1</th>
                              <th class="text-center">Medigroup S1</th>
                              <th class="text-center">Medi Clinic Plus</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="py-0">Ein- oder Zweibettzimmer</td>
                              <td class="py-0" justify="center" align="center">
                                <sick-bed-icon></sick-bed-icon>
                              </td>
                              <td class="py-0" justify="center" align="center">
                                <sick-bed-icon></sick-bed-icon>
                                <sick-bed-icon></sick-bed-icon>
                              </td>
                              <td class="py-0" justify="center" align="center">
                                <sick-bed-icon></sick-bed-icon>
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">Alterungsrückstellung</td>
                              <td class="py-0" justify="center" align="center">
                                <v-icon color="#E1100A" large>mdi-close</v-icon>
                              </td>
                              <td class="py-0" justify="center" align="center">
                                <v-icon color="#E1100A" large>mdi-close</v-icon>
                              </td>
                              <td class="py-0" justify="center" align="center">
                                <v-icon color="#8AB304" large
                                  >mdi-checkbox-marked-circle-outline</v-icon
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">
                                100% privatärztliche Behandlung (Chefarzt)
                              </td>
                              <td
                                class="py-0"
                                justify="center"
                                align="center"
                                colspan="3"
                              >
                                <v-icon color="#8AB304" large
                                  >mdi-checkbox-marked-circle-outline</v-icon
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">
                                100% Zuzahlung für stationären Aufenthalt
                              </td>
                              <td
                                class="py-0"
                                justify="center"
                                align="center"
                                colspan="3"
                              >
                                <v-icon color="#8AB304" large
                                  >mdi-checkbox-marked-circle-outline</v-icon
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">100% ambulante Operationen</td>
                              <td
                                class="py-0"
                                justify="center"
                                align="center"
                                colspan="3"
                              >
                                <v-icon color="#8AB304" large
                                  >mdi-checkbox-marked-circle-outline</v-icon
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">100% Rooming-in</td>
                              <td
                                class="py-0"
                                justify="center"
                                align="center"
                                colspan="3"
                              >
                                <v-icon color="#8AB304" large
                                  >mdi-checkbox-marked-circle-outline</v-icon
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">Freie Krankenhausauswahl</td>
                              <td
                                class="py-0"
                                justify="center"
                                align="center"
                                colspan="3"
                              >
                                <v-icon color="#8AB304" large
                                  >mdi-checkbox-marked-circle-outline</v-icon
                                >
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card-text>

                    <v-divider></v-divider>
                  </v-card>
                </v-dialog>
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
            <div v-if="(categoryPanelData[1].expanded && $vuetify.breakpoint.smAndDown)|| $vuetify.breakpoint.mdAndUp">
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
            <div v-if="(categoryPanelData[2].expanded && $vuetify.breakpoint.smAndDown)|| $vuetify.breakpoint.mdAndUp">
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
            <div v-if="(categoryPanelData[3].expanded && $vuetify.breakpoint.smAndDown)|| $vuetify.breakpoint.mdAndUp">
              <rate-selection-panel
                v-for="(ratePanel, index) in preventionPanelData"
                :key="index"
                :ratePanelData="ratePanel"
                :checkRate="selectPreventionRatePanel"
                :class="{ 'mt-4': ratePanel.id !== 0 }"
              ></rate-selection-panel>
              <v-layout justify-start class="pt-2">
                <v-dialog v-model="dialogMembership" width="900">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      class="px-3 primary--text body-1 btn-link"
                      large
                      :ripple="false"
                      v-on="on"
                    >
                      <v-icon color="primary">mdi-arrow-right</v-icon>TARIFE
                      VERGLEICHEN
                    </v-btn>
                  </template>

                  <v-card>
                    <div class="px-2 pt-2">
                      <v-btn
                        absolute
                        icon
                        right
                        small
                        @click="dialogMembership = false"
                      >
                        <v-icon color="primary">mdi-close</v-icon>
                      </v-btn>
                    </div>
                    <v-card-text class="pt-10">
                      <v-simple-table class="plan-compare-table">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left"></th>
                              <th class="text-center">Medigroup Basis</th>
                              <th class="text-center">Medigroup Premium</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="py-0">Medigroup Premium</td>
                              <td class="py-0" justify="center" align="center">
                                100%
                              </td>
                              <td class="py-0" justify="center" align="center">
                                100%
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">Schutzimpfungen</td>
                              <td class="py-0" justify="center" align="center">
                                100%
                              </td>
                              <td class="py-0" justify="center" align="center">
                                100%
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">Prävention</td>
                              <td class="py-0" justify="center" align="center">
                                bis zu 50 €/Jahr für eine Mitgliedschaft im
                                Fitnessstudio
                              </td>
                              <td class="py-0" justify="center" align="center">
                                bis zu insgesamt 100 €/Jahr für eine
                                Mitgliedschaft im Fitnessstudio (max. 50€/Jahr)
                                und/oder die regelmäßige Teilnahme an
                                Präventionskursen
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">
                                Arzneimittel (nicht verschreibungspflichtig)
                              </td>
                              <td class="py-0" justify="center" align="center">
                                <v-icon color="#E1100A" large>mdi-close</v-icon>
                              </td>
                              <td class="py-0" justify="center" align="center">
                                Arzneimittel (nicht verschreibungspflichtig)
                              </td>
                            </tr>
                            <tr>
                              <td class="py-0">Maximal</td>
                              <td class="py-0" justify="center" align="center">
                                200 €/Jahr
                              </td>
                              <td class="py-0" justify="center" align="center">
                                500 €/Jahr
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card-text>
                    <v-divider></v-divider>
                  </v-card>
                </v-dialog>
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
            middleTitle="17,96 €"
            leftTitleClass="subtitle-1 font-weight-bold grey--text text--darken-3 pl-4"
            middleTitleClass="subtitle-1 font-weight-bold grey--text text--darken-3"
          ></middle-title-panel>
        </v-row>
        <v-row justify="center">
          <v-btn
            depressed
            large
            color="danger"
            class="mt-4 white--text"
            @click="onClickContinueWithSelection"
            >MIT AUSWAHL FORTFAHREN</v-btn
          >
        </v-row>
        <v-row justify="start" class="px-3">
          <router-link to="/inputDOB" tag="span">
            <v-btn
              text
              class="px-3 primary--text body-1 btn-link"
              large
              :ripple="false"
            >
              <v-icon color="primary">mdi-arrow-left</v-icon>ZURÜCK
            </v-btn>
          </router-link>
        </v-row>
      </v-layout>
    </v-col>
  </v-layout>
</template>

<script>
import CategoryPanel from "@/components/CategoryPanel.vue";
import RateSelectionPanel from "@/components/RateSelectionPanel.vue";
import MiddleTitlePanel from "@/components/MiddleTitlePanel";
import SickBedIcon from "@/components/Icons/SickBedIcon";
export default {
  name: "Dashboard",
  components: {
    CategoryPanel,
    RateSelectionPanel,
    MiddleTitlePanel,
    SickBedIcon
  },
  props: {},
  data() {
    return {
      days: ["01.12.2019"],
      dialogStationary: false,
      dialogMembership: false,
      categoryPanelData: [
        {
          id: 0,
          panelTitle: "Stationär",
          panelDescription:
            "Maximales Wohlbefinden, <br />sowie beste Leistungen.",
          panelFeature: [
            "Behandlung durch den Chefarzt",
            "Ein- oder Zweibettzimmer",
            "Freie Krankenhausauswahl"
          ],
          panelBackground: "tertiary",
          checked: true,
          expanded: false
        },
        {
          id: 1,
          panelTitle: "Zahn",
          panelDescription:
            "Optimaler Schutz vor hohen<br/> Selbstkosten beim Zahnarzt.",
          panelFeature: [
            "Zahnbehandlung 100%",
            "Zahnersatz, Inlays & Implantate",
            "Prof. Zahnreinigung 150€/Jahr"
          ],
          panelBackground: "quinary",
          checked: false,
          expanded: false
        },
        {
          id: 2,
          panelTitle: "Ambulant",
          panelDescription:
            "Maximales Wohlbefinden, <br />sowie beste Leistungen.",
          panelFeature: [
            "Erstattung für Arzneimittel 100%",
            "Heilpraktiker 80%",
            "Sehhilfen 120€/Jahr"
          ],
          panelBackground: "primary",
          checked: false,
          expanded: false
        },
        {
          id: 3,
          panelTitle: "Vorsorge",
          panelDescription:
            "Mit dem Vorsorgepaket sind<br /> Sie bestens geschützt & versorgt.",
          panelFeature: [
            "Vorsorge 100%",
            "Schutzimpfungen 100%",
            "Erstattung für Präventionen"
          ],
          panelBackground: "senary",
          checked: false,
          expanded: false
        }
      ],
      stationaryPanelData: [
        {
          id: 0,
          panelTitle: "S1 - 1-Bett-Zimmer",
          haveRadioOption: true,
          panelBackground: "white",
          panelRate: "17,96",
          checked: true,
          isTop: true
        },
        {
          id: 1,
          panelTitle: "S2 - 2-Bett-Zimmer",
          haveRadioOption: true,
          panelBackground: "white",
          panelRate: "14,96",
          checked: false,
          isTop: false
        },
        {
          id: 2,
          panelTitle: "Clinic Plus - 2-Bett-Zimmer",
          haveRadioOption: true,
          panelBackground: "white",
          panelRate: "21,96",
          checked: false,
          isTop: false
        }
      ],
      toothPanelData: [
        {
          id: 0,
          panelTitle: "Z Duo",
          haveRadioOption: false,
          panelBackground: "white",
          panelRate: "0",
          checked: false,
          isTop: false
        }
      ],
      outpatientPanelData: [
        {
          id: 0,
          panelTitle: "A",
          haveRadioOption: false,
          panelBackground: "white",
          panelRate: "0",
          checked: false,
          isTop: false
        }
      ],
      preventionPanelData: [
        {
          id: 0,
          panelTitle: "Basis",
          haveRadioOption: true,
          panelBackground: "white",
          panelRate: "0",
          checked: true,
          isTop: false
        },
        {
          id: 1,
          panelTitle: "Premium",
          haveRadioOption: true,
          panelBackground: "white",
          panelRate: "0",
          checked: false,
          isTop: false
        }
      ]
    };
  },
  methods: {
    selectPanels(id) {
      this.categoryPanelData[id].checked = !this.categoryPanelData[id].checked;
    },

    selectStationaryRatePanel(id) {
      this.stationaryPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
    },

    selectToothRatePanel(id) {
      this.toothPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
    },

    selectOutpatientRatePanel(id) {
      this.outpatientPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
    },

    selectPreventionRatePanel(id) {
      this.preventionPanelData.map(
        item => (item.checked = item.id === id ? true : false)
      );
    },

    expandCategoryPanel(id, expanded) {
      this.categoryPanelData.map(
        category =>
          (category.expanded =
            category.id === id ? expanded : category.expanded)
      );
    },

    onClickContinueWithSelection() {}
  },
  mounted() {
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
