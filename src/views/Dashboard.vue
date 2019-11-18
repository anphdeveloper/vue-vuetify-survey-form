<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="9" xs="12" class="mt-10 pt-10">
      <v-layout column wrap>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <h2>Ihre betriebliche Gesundheitsförderung</h2>
            <p class="pb-0 mb-0 mt-4 text-start caption">Geburtsdatum</p>
            <v-select class="mt-0 pt-0" :items="days" v-model="days[0]" :rules="[v => !!v || '']"></v-select>
          </v-col>
        </v-row>

        <v-row justify="center" v-if="$vuetify.breakpoint.mdAndUp">
          <v-col cols="12" md="3" sm="6" xs="12" v-for="(panel, index) in panelData" :key="index">
            <plan-panel
              :id="panel.id"
              :panelBackground="panel.panelBackground"
              :panelTitle="panel.panelTitle"
              :panelDescription="panel.panelDescription"
              :panelFeature="panel.panelFeature"
              :checked="panel.checked"
              :checkPanel="selectPanels"
            ></plan-panel>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="3" sm="6" xs="12">
            <plan-panel
              :id="panelData[0].id"
              :panelBackground="panelData[0].panelBackground"
              :panelTitle="panelData[0].panelTitle"
              :panelDescription="panelData[0].panelDescription"
              :panelFeature="panelData[0].panelFeature"
              :checked="panelData[0].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></plan-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="S1 - 1-Bett-Zimmer"
              :haveRadioOption="true"
              :checked="true"
              :checkRate="selectPanels"
              panelRate="17,96"
              :isTop="true"
            ></rate-selection-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="S1 - 1-Bett-Zimmer"
              :haveRadioOption="true"
              :checked="false"
              :checkRate="selectPanels"
              panelRate="14,96"
              :isTop="false"
              class="mt-4"
            ></rate-selection-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="S1 - 1-Bett-Zimmer"
              :haveRadioOption="true"
              :checked="false"
              :checkRate="selectPanels"
              panelRate="21,96"
              :isTop="false"
              class="mt-4 pb-4"
            >
              <template v-slot>
                <p class="pb-2 text-left pl-4 ml-1">
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
            <v-layout justify-start>
              <router-link to="/testLink" tag="span">
                <v-btn text class="px-3 primary--text body-1 btn-link" large :ripple="false"><v-icon color="primary">mdi-arrow-right</v-icon>TARIFE VERGLEICHEN</v-btn>
              </router-link>
            </v-layout>
            
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <plan-panel
              :id="panelData[1].id"
              :panelBackground="panelData[1].panelBackground"
              :panelTitle="panelData[1].panelTitle"
              :panelDescription="panelData[1].panelDescription"
              :panelFeature="panelData[1].panelFeature"
              :checked="panelData[1].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></plan-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="Z Duo"
              :haveRadioOption="false"
              :checked="true"
              :checkRate="selectPanels"
              :panelRate="0"
              :isTop="false"
            ></rate-selection-panel>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <plan-panel
              :id="panelData[2].id"
              :panelBackground="panelData[2].panelBackground"
              :panelTitle="panelData[2].panelTitle"
              :panelDescription="panelData[2].panelDescription"
              :panelFeature="panelData[2].panelFeature"
              :checked="panelData[2].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></plan-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="A"
              :haveRadioOption="false"
              :checked="true"
              :checkRate="selectPanels"
              :panelRate="0"
              :isTop="false"
            ></rate-selection-panel>
          </v-col>
          <v-col cols="12" md="3" sm="6" xs="12">
            <plan-panel
              :id="panelData[3].id"
              :panelBackground="panelData[3].panelBackground"
              :panelTitle="panelData[3].panelTitle"
              :panelDescription="panelData[3].panelDescription"
              :panelFeature="panelData[3].panelFeature"
              :checked="panelData[3].checked"
              :checkPanel="selectPanels"
              v-if="$vuetify.breakpoint.smAndDown"
              class="mb-12"
            ></plan-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="Basis"
              :haveRadioOption="true"
              :checked="true"
              :checkRate="selectPanels"
              :panelRate="0"
              :isTop="false"
            ></rate-selection-panel>
            <rate-selection-panel
              :id="0"
              panelBackground="white"
              panelTitle="Premium"
              :haveRadioOption="true"
              :checked="true"
              :checkRate="selectPanels"
              :panelRate="0"
              :isTop="false"
              class="mt-4"
            ></rate-selection-panel>
            <v-layout justify-start class="mt-4">
              <router-link to="/testLink" tag="span">
                <v-btn text class="px-3 primary--text body-1 btn-link" large :ripple="false"><v-icon color="primary">mdi-arrow-right</v-icon>TARIFE VERGLEICHEN</v-btn>
              </router-link>
            </v-layout>
          </v-col>
        </v-row>
      </v-layout>
      <v-btn large block primary>hello</v-btn>
    </v-col>
  </v-layout>
</template>

<script>
import PlanPanel from "@/components/PlanPanel.vue";
import RateSelectionPanel from "@/components/RateSelectionPanel.vue";
export default {
  name: "Dashboard",
  components: {
    PlanPanel,
    RateSelectionPanel
  },
  props: {},
  data() {
    return {
      days: ["01.12.2019"],
      panelData: [
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
      ]
    };
  },
  methods: {
    selectPanels(id) {
      this.panelData[id].checked = !this.panelData[id].checked;
      console.log("panelData", this.panelData);
    },
    selectRatePanel(id) {
      console.log("panelData", id);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
</style>