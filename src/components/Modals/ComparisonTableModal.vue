<template>
  <div>
    <v-btn
      text
      class="px-3 primary--text body-1 btn-link"
      large
      :ripple="false"
      @click="show = true"
    >
      <go-forward-icon color="primary"></go-forward-icon>TARIFE VERGLEICHEN
    </v-btn>
    <v-dialog v-model="show" width="900">
      <v-card>
        <div class="px-2 pt-2">
          <v-btn absolute icon right small @click="show = false">
            <v-icon color="primary">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-text class="pt-10">
          <v-simple-table
            class="plan-compare-table"
            v-if="isComparisonForStationary && $vuetify.breakpoint.smAndUp"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-center">MediGroup S1</th>
                  <th class="text-center">MediGroup S2</th>
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
                  <td class="pt-1">
                    <red-cross-icon></red-cross-icon>
                  </td>
                  <td class="py-0" justify="center" align="center">
                    <red-cross-icon></red-cross-icon>
                  </td>
                  <td class="py-0" justify="center" align="center">
                    <checked-icon></checked-icon>
                  </td>
                </tr>
                <tr>
                  <td class="py-0">
                    100% privatärztliche Behandlung (Chefarzt)
                  </td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <checked-icon></checked-icon>
                  </td>
                </tr>
                <tr>
                  <td class="py-0">
                    100% Zuzahlung für stationären Aufenthalt
                  </td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <checked-icon></checked-icon>
                  </td>
                </tr>
                <tr>
                  <td class="py-0">100% ambulante Operationen</td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <checked-icon></checked-icon>
                  </td>
                </tr>
                <tr>
                  <td class="py-0">100% Rooming-in</td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <checked-icon></checked-icon>
                  </td>
                </tr>
                <tr>
                  <td class="py-0">Freie Krankenhausauswahl</td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <checked-icon></checked-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            show-arrows
            hide-slider
            height="96"
            class="group-table-mobile"
            v-if="isComparisonForStationary && $vuetify.breakpoint.xs"
          >
            <v-tab v-for="item in groupItems" :key="item" v-html="item"></v-tab>
          </v-tabs>

          <v-tabs-items
            v-model="tab"
            v-if="isComparisonForStationary && $vuetify.breakpoint.xs"
          >
            <v-tab-item>
              <div class="comp-mobile-table">
                <v-container class="body-1 font-weight-bold">
                  <v-row class="px-2 py-0">
                    <v-col
                      cols="9"
                      align="start"
                      align-self="center"
                      class="px-0 py-1"
                    >
                      <span>Einbettzimmer</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align="end"
                      align-self="center"
                      justify-self="center"
                      class="py-1"
                    >
                      <sick-bed-icon class="mr-1"></sick-bed-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>Alterungsrückstellung</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <red-cross-icon></red-cross-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% privatärztliche Behandlung (Chefarzt)</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% Zuzahlung für stationären Aufenthalt</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% ambulante Operationen</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% Rooming-in</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>Freie Krankenhausauswahl</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="comp-mobile-table">
                <v-container class="body-1 font-weight-bold">
                  <v-row class="px-2">
                    <v-col
                      cols="7"
                      align="start"
                      align-self="center"
                      class="px-0 py-1"
                    >
                      <span>Zweibettzimmer</span>
                    </v-col>
                    <v-col
                      cols="5"
                      align="end"
                      align-self="center"
                      justify-self="center"
                      class="py-1"
                    >
                      <sick-bed-icon class="mr-1"></sick-bed-icon>
                      <sick-bed-icon class="mr-1"></sick-bed-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>Alterungsrückstellung</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <red-cross-icon></red-cross-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% privatärztliche Behandlung (Chefarzt)</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% Zuzahlung für stationären Aufenthalt</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% ambulante Operationen</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% Rooming-in</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>Freie Krankenhausauswahl</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="comp-mobile-table">
                <v-container class="body-1 font-weight-bold">
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align="start"
                      align-self="center"
                      class="px-0 py-1"
                    >
                      <span>Zweibettzimmer</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align="end"
                      class="py-1"
                      align-self="center"
                      justify-self="center"
                    >
                      <sick-bed-icon class="mr-1"></sick-bed-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>Alterungsrückstellung</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% privatärztliche Behandlung (Chefarzt)</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% Zuzahlung für stationären Aufenthalt</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% ambulante Operationen</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>100% Rooming-in</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0 py-1"
                    >
                      <span>Freie Krankenhausauswahl</span>
                    </v-col>
                    <v-col
                      cols="3"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <checked-icon></checked-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-tab-item>
          </v-tabs-items>
          <v-simple-table
            class="plan-compare-table membership"
            v-if="!isComparisonForStationary && $vuetify.breakpoint.smAndUp"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-center">MediGroup Basis</th>
                  <th class="text-center">MediGroup Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-0">MediGroup Premium</td>
                  <td class="py-0" justify="center" align="center">100%</td>
                  <td class="py-0" justify="center" align="center">100%</td>
                </tr>
                <tr>
                  <td class="py-0">Schutzimpfungen</td>
                  <td class="py-0" justify="center" align="center">100%</td>
                  <td class="py-0" justify="center" align="center">100%</td>
                </tr>
                <tr>
                  <td class="py-0">Prävention</td>
                  <td class="py-0" justify="center" align="center">
                    bis zu 50 €/Jahr für eine Mitgliedschaft im Fitnessstudio
                  </td>
                  <td class="py-0" justify="center" align="center">
                    bis zu insgesamt 100 €/Jahr für eine Mitgliedschaft im
                    Fitnessstudio (max. 50€/Jahr) und/oder die regelmäßige
                    Teilnahme an Präventionskursen
                  </td>
                </tr>
                <tr>
                  <td class="py-0">
                    Arzneimittel (nicht verschreibungspflichtig)
                  </td>
                  <td class="py-0" justify="center" align="center">
                    <red-cross-icon></red-cross-icon>
                  </td>
                  <td class="py-0" justify="center" align="center">
                    bis zu 50 €/Jahr
                  </td>
                </tr>
                <tr>
                  <td class="py-0">Maximale Erstattungen pro Jahr</td>
                  <td class="py-0" justify="center" align="center">200 €</td>
                  <td class="py-0" justify="center" align="center">500 €</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            show-arrows
            hide-slider
            height="96"
            class="membership-table-mobile"
            v-if="!isComparisonForStationary && $vuetify.breakpoint.xs"
          >
            <v-tab
              v-for="item in membershipItems"
              :key="item"
              v-html="item"
            ></v-tab>
          </v-tabs>

          <v-tabs-items
            v-model="tab"
            v-if="!isComparisonForStationary && $vuetify.breakpoint.xs"
          >
            <v-tab-item>
              <div class="comp-mobile-table">
                <v-container class="body-1 font-weight-bold meta-pro-text">
                  <v-row class="px-2 py-0">
                    <v-col
                      cols="9"
                      align="start"
                      align-self="center"
                      class="px-0"
                    >
                      <span>100% Vorsorge</span>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span>100% Schutzimpfungen</span>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="11"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span>Prävention</span>
                      <p class="mb-0">
                        bis zu 50 €/Jahr für eine Mitgliedschaft im
                        Fitnessstudio
                      </p>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="10"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span>Arzneimittel</span>
                      <p class="mb-0 body-2">(nicht verschreibungspflichtig)</p>
                    </v-col>
                    <v-col
                      cols="2"
                      align-self="center"
                      align="end"
                      class="py-1"
                    >
                      <red-cross-icon></red-cross-icon>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span class="meta-pro-black">Maximal 200 €/Jahr</span>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="comp-mobile-table">
                <v-container class="body-1 font-weight-bold meta-pro-text">
                  <v-row class="px-2 py-0">
                    <v-col
                      cols="9"
                      align="start"
                      align-self="center"
                      class="px-0"
                    >
                      <span>100% Vorsorge</span>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span>100% Schutzimpfungen</span>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="11"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span>Prävention</span>
                      <p class="mb-0">
                        bis zu insgesamt 100 €/Jahr für eine Mitgliedschaft im
                        Fitness- studio (max. 50€/Jahr) und/oder die regelmäßige
                        Teilnahme an Präventionskursen
                      </p>
                    </v-col>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="11"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span>Arzneimittel bis zu 50 €/Jahr</span>
                      <p class="mb-0 body-2">(nicht verschreibungspflichtig)</p>
                    </v-col>
                    <!-- <v-col cols="2" align-self="center" align="end" class="py-1">
                      <red-cross-icon></red-cross-icon>
                    </v-col>-->
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      cols="9"
                      align-self="center"
                      align="start"
                      class="px-0"
                    >
                      <span class="font-weight-black body-1 meta-pro-black"
                        >Maximal 500 €/Jahr</span
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SickBedIcon from "@/components/Icons/SickBedIcon";
import CheckedIcon from "@/components/Icons/CheckedIcon";
import RedCrossIcon from "@/components/Icons/RedCrossIcon";
import GoForwardIcon from "@/components/Icons/GoForwardIcon";
export default {
  name: "ComparisonTableModal",
  components: {
    SickBedIcon,
    CheckedIcon,
    RedCrossIcon,
    GoForwardIcon
  },
  props: ["isComparisonForStationary"],
  data() {
    return {
      show: false,
      tab: null,
      groupItems: [
        "MediGroup<br />S1",
        "MediGroup<br />S2",
        "Medi<br/>Clinic Plus"
      ],
      membershipItems: ["MediGroup<br />Basis", "MediGroup<br />Premium"]
    };
  },
  computed: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.plan-compare-table {
  th {
    background: #00718f;
    opacity: 1;
    border: 0.5px solid #ced4da;
    color: white !important;
    font-size: 1em;
    &:first-child {
      background: white;
      border: unset;
    }
    &:nth-child(3) {
      opacity: 0.7;
    }
    &:nth-child(4) {
      opacity: 0.5;
    }
    &:not(first-child) {
      width: 15%;
    }
  }
  tr {
    td {
      border: 0.5px solid #ced4da;
      &:first-child {
        background: #ced4da;
      }
    }
  }
  &.membership {
    th {
      background: #3c8085;
      opacity: 1;
      border: 0.5px solid #ced4da;
      color: white !important;
      font-size: 1em;
      &:first-child {
        background: white;
        border: unset;
      }
      &:nth-child(3) {
        opacity: 0.7;
      }
      &:not(first-child) {
        width: 15%;
      }
    }
  }
}

.group-table-mobile {
  .v-tab {
    width: 33.3%;
    max-width: 33.33%;
    padding-left: 0;
    padding-right: 0;
    color: #fff !important;
    background: #035370;
    opacity: 1;
    margin-bottom: 25px;
    text-transform: capitalize;
    &:before {
      transition: unset;
    }
    &.v-tab--active {
      margin-bottom: 15px;
      &::before {
        opacity: 0;
      }
      &::after {
        z-index: 10000;
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        left: 50%;
        bottom: 0;
        border: 15px solid transparent;
        border-bottom: 0;
        border-top: 15px solid #035370;
        transform: translate(-50%, calc(100% - 1px));
      }
    }
  }
  .v-tab:nth-child(2) {
    opacity: 0.7;
    &.v-tab--active {
      margin-bottom: 15px;
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        left: 50%;
        bottom: 0;
        border: 15px solid transparent;
        border-bottom: 0;
        border-top: 15px solid #035370;
        opacity: 1;
        transform: translate(-50%, calc(100% - 1px));
      }
    }
  }

  .v-tab:last-child {
    opacity: 0.4;
    &.v-tab--active {
      margin-bottom: 15px;
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        left: 50%;
        bottom: 0;
        border: 15px solid transparent;
        border-bottom: 0;
        border-top: 15px solid #035370;
        opacity: 1;
        transform: translate(-50%, calc(100% - 1px));
      }
    }
  }
  .v-slide-group__prev {
    display: none !important;
  }

  .v-slide-group__next {
    display: none !important;
  }
}

.membership-table-mobile {
  .v-tab {
    width: 50%;
    max-width: 50%;
    padding-left: 0;
    padding-right: 0;
    color: #fff !important;
    background: #3c8085;
    opacity: 1;
    margin-bottom: 25px;
    text-transform: capitalize;
    &:before {
      transition: unset;
    }
    &.v-tab--active {
      margin-bottom: 15px;
      &::before {
        opacity: 0;
      }
      &::after {
        z-index: 10000;
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        left: 50%;
        bottom: 0;
        border: 15px solid transparent;
        border-bottom: 0;
        border-top: 15px solid #3c8085;
        transform: translate(-50%, calc(100% - 1px));
      }
    }
  }
  .v-tab:nth-child(2) {
    opacity: 0.7;
    &.v-tab--active {
      margin-bottom: 15px;
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        left: 50%;
        bottom: 0;
        border: 15px solid transparent;
        border-bottom: 0;
        border-top: 15px solid #3c8085;
        opacity: 1;
        transform: translate(-50%, calc(100% - 1px));
      }
    }
  }

  .v-slide-group__prev {
    display: none;
  }

  .v-slide-group__next {
    display: none !important;
  }
}

.comp-mobile-table {
  .row {
    border-left: 1px solid #ced4da;
    border-right: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    &:first-child {
      border-top: 1px solid #ced4da;
    }
    &:nth-child(odd) {
      background: #e6e9ec;
    }
  }
}
</style>
