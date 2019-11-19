<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="9" xs="12" class="mt-10">
      <v-layout column wrap>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <h2>Ihre betriebliche Gesundheitsförderung</h2>
            <p class="pb-0 mb-0 mt-4 text-start caption">Geburtsdatum</p>
            <v-select class="mt-0 pt-0" :items="days" v-model="days[0]" :rules="[v => !!v || '']"></v-select>
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
              :id="panel.id"
              :panelBackground="panel.panelBackground"
              :panelTitle="panel.panelTitle"
              :panelDescription="panel.panelDescription"
              :panelFeature="panel.panelFeature"
              :checked="panel.checked"
              :checkPanel="selectPanels"
            ></category-panel>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :id="categoryPanelData[0].id"
              :panelBackground="categoryPanelData[0].panelBackground"
              :panelTitle="categoryPanelData[0].panelTitle"
              :panelDescription="categoryPanelData[0].panelDescription"
              :panelFeature="categoryPanelData[0].panelFeature"
              :checked="categoryPanelData[0].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <rate-selection-panel
              v-for="(ratePanel, index) in stationaryPanelData"
              :key="index"
              :id="ratePanel.id"
              :panelBackground="ratePanel.panelBackground"
              :panelTitle="ratePanel.panelTitle"
              :haveRadioOption="ratePanel.haveRadioOption"
              :checked="ratePanel.checked"
              :checkRate="selectStationaryRatePanel"
              :panelRate="ratePanel.panelRate"
              :isTop="ratePanel.isTop"
              :class="{'mt-4': ratePanel.id !== 0 }"
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
                            <br />Sie zahlen zu Beginn höhere Beiträge und sparen so Guthaben fürs Alter an.
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
              <v-dialog v-model="dialog" width="900">
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    class="px-3 primary--text body-1 btn-link"
                    large
                    :ripple="false"
                    v-on="on"
                  >
                    <v-icon color="primary">mdi-arrow-right</v-icon>TARIFE VERGLEICHEN
                  </v-btn>
                </template>

                <v-card>
                  <div class="px-2 pt-2">
                    <v-btn absolute icon right small @click="dialog = false">
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
                              <v-icon color="#8AB304" large>mdi-checkbox-marked-circle-outline</v-icon>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-0">100% privatärztliche Behandlung (Chefarzt)</td>
                            <td class="py-0" justify="center" align="center" colspan="3">
                              <v-icon color="#8AB304" large>mdi-checkbox-marked-circle-outline</v-icon>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-0">100% Zuzahlung für stationären Aufenthalt</td>
                            <td class="py-0" justify="center" align="center" colspan="3">
                              <v-icon color="#8AB304" large>mdi-checkbox-marked-circle-outline</v-icon>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-0">100% ambulante Operationen</td>
                            <td class="py-0" justify="center" align="center" colspan="3">
                              <v-icon color="#8AB304" large>mdi-checkbox-marked-circle-outline</v-icon>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-0">100% Rooming-in</td>
                            <td class="py-0" justify="center" align="center" colspan="3">
                              <v-icon color="#8AB304" large>mdi-checkbox-marked-circle-outline</v-icon>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-0">Freie Krankenhausauswahl</td>
                            <td class="py-0" justify="center" align="center" colspan="3">
                              <v-icon color="#8AB304" large>mdi-checkbox-marked-circle-outline</v-icon>
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
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :id="categoryPanelData[1].id"
              :panelBackground="categoryPanelData[1].panelBackground"
              :panelTitle="categoryPanelData[1].panelTitle"
              :panelDescription="categoryPanelData[1].panelDescription"
              :panelFeature="categoryPanelData[1].panelFeature"
              :checked="categoryPanelData[1].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <rate-selection-panel
              v-for="(ratePanel, index) in toothPanelData"
              :key="index"
              :id="ratePanel.id"
              :panelBackground="ratePanel.panelBackground"
              :panelTitle="ratePanel.panelTitle"
              :haveRadioOption="ratePanel.haveRadioOption"
              :checked="ratePanel.checked"
              :checkRate="selectToothRatePanel"
              :panelRate="ratePanel.panelRate"
              :isTop="ratePanel.isTop"
              :class="{'mt-4': ratePanel.id !== 0 }"
            ></rate-selection-panel>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :id="categoryPanelData[2].id"
              :panelBackground="categoryPanelData[2].panelBackground"
              :panelTitle="categoryPanelData[2].panelTitle"
              :panelDescription="categoryPanelData[2].panelDescription"
              :panelFeature="categoryPanelData[2].panelFeature"
              :checked="categoryPanelData[2].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <rate-selection-panel
              v-for="(ratePanel, index) in outpatientPanelData"
              :key="index"
              :id="ratePanel.id"
              :panelBackground="ratePanel.panelBackground"
              :panelTitle="ratePanel.panelTitle"
              :haveRadioOption="ratePanel.haveRadioOption"
              :checked="ratePanel.checked"
              :checkRate="selectOutpatientRatePanel"
              :panelRate="ratePanel.panelRate"
              :isTop="ratePanel.isTop"
              :class="{'mt-4': ratePanel.id !== 0 }"
            ></rate-selection-panel>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <category-panel
              :id="categoryPanelData[3].id"
              :panelBackground="categoryPanelData[3].panelBackground"
              :panelTitle="categoryPanelData[3].panelTitle"
              :panelDescription="categoryPanelData[3].panelDescription"
              :panelFeature="categoryPanelData[3].panelFeature"
              :checked="categoryPanelData[3].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></category-panel>
            <rate-selection-panel
              v-for="(ratePanel, index) in preventionPanelData"
              :key="index"
              :id="ratePanel.id"
              :panelBackground="ratePanel.panelBackground"
              :panelTitle="ratePanel.panelTitle"
              :haveRadioOption="ratePanel.haveRadioOption"
              :checked="ratePanel.checked"
              :checkRate="selectPreventionRatePanel"
              :panelRate="ratePanel.panelRate"
              :isTop="ratePanel.isTop"
              :class="{'mt-4': ratePanel.id !== 0 }"
            ></rate-selection-panel>
            <v-layout justify-start class="pt-2">
              <router-link to="/testLink" tag="span">
                <v-btn text class="px-3 primary--text body-1 btn-link" large :ripple="false">
                  <v-icon color="primary">mdi-arrow-right</v-icon>TARIFE VERGLEICHEN
                </v-btn>
              </router-link>
            </v-layout>
          </v-col>
        </v-row>
      </v-layout>
      <v-layout column wrap>
        <v-row class="white mx-0 py-0" align="center" style="height: 50px;">
          <!-- <v-col cols="12" sm="4" class="py-0 px-4 text-xs-center text-sm-left">
            <span class="subtitle-1 font-weight-bold grey--text text--darken-3">mtl. Gesamt-Beitrag</span>
          </v-col>
          <v-col cols="12" sm="4" class="py-0">
            <span class="subtitle-1 font-weight-bold grey--text text--darken-3">17,96 €</span>
          </v-col>
          <v-spacer></v-spacer>-->
          <!-- <p class="subtitle-1 font-weight-bold grey--text text--darken-3 mb-0">mtl. Gesamt-Beitrag</p>
          <span class="subtitle-1 font-weight-bold grey--text text--darken-3"><span>17,96 €</span></span>-->
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
          >MIT AUSWAHL FORTFAHREN</v-btn>
        </v-row>
        <v-row justify="start" class="px-3">
          <router-link to="/testLink" tag="span">
            <v-btn text class="px-3 primary--text body-1 btn-link" large :ripple="false">
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
import SickBedIcon from '@/components/Icons/SickBedIcon';
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
      dialog: false,
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
          checked: true
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
          checked: false
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
          checked: false
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
          checked: false
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

      // desserts: [
      //   {
      //     name: "Ein- oder Zweibettzimmer",
      //     group1:
      //   },
      //   {
      //     name: "Ice cream sandwich",
      //     calories: 237
      //   },
      //   {
      //     name: "Eclair",
      //     calories: 262
      //   },
      //   {
      //     name: "Cupcake",
      //     calories: 305
      //   },
      //   {
      //     name: "Gingerbread",
      //     calories: 356
      //   },
      //   {
      //     name: "Jelly bean",
      //     calories: 375
      //   },

      // ]
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

    onClickContinueWithSelection() {}
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.plan-compare-table{
  th{
    background: #00718F;
    border: 0.5px solid #CED4DA;
    &:first-child{
      background: white;
      border: unset;
    }
    &:not(first-child){
      width: 15%;
    }
  }
  tr{
    td{
      border: 0.5px solid #CED4DA;
      &:first-child{
        background:  #ccc;
      }
    }
  }
}
</style>