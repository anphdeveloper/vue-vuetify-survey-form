<template>
  <div>
    <v-btn
      text
      class="px-3 primary--text body-1 btn-link"
      large
      :ripple="false"
      @click="show = true"
    >
      <v-icon color="primary">mdi-arrow-right</v-icon>TARIFE VERGLEICHEN
    </v-btn>
    <v-dialog v-model="show" width="900">
      <v-card>
        <div class="px-2 pt-2">
          <v-btn absolute icon right small @click="show = false">
            <v-icon color="primary">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-text class="pt-10">
          <!-- <v-simple-table
            class="plan-compare-table"
            v-if="isComparisonForStationary"
          >
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
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <v-icon color="#8AB304" large
                      >mdi-checkbox-marked-circle-outline</v-icon
                    >
                  </td>
                </tr>
                <tr>
                  <td class="py-0">
                    100% Zuzahlung für stationären Aufenthalt
                  </td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <v-icon color="#8AB304" large
                      >mdi-checkbox-marked-circle-outline</v-icon
                    >
                  </td>
                </tr>
                <tr>
                  <td class="py-0">100% ambulante Operationen</td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <v-icon color="#8AB304" large
                      >mdi-checkbox-marked-circle-outline</v-icon
                    >
                  </td>
                </tr>
                <tr>
                  <td class="py-0">100% Rooming-in</td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <v-icon color="#8AB304" large
                      >mdi-checkbox-marked-circle-outline</v-icon
                    >
                  </td>
                </tr>
                <tr>
                  <td class="py-0">Freie Krankenhausauswahl</td>
                  <td class="py-0" justify="center" align="center" colspan="3">
                    <v-icon color="#8AB304" large
                      >mdi-checkbox-marked-circle-outline</v-icon
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table class="plan-compare-table" v-else>
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
          </v-simple-table>-->

          <v-tabs v-model="tab" 
          background-color="transparent" 
          color="basil" 
          show-arrows
          class="group-table-mobile">
            <v-tab v-for="item in items" :key="item" v-html="item"></v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card flat color="basil">
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import SickBedIcon from "@/components/Icons/SickBedIcon";
export default {
  name: "ComparisonTableModal",
  components: {
    //SickBedIcon
  },
  props: ["isComparisonForStationary"],
  data() {
    return {
      show: false,
      tab: null,
        items: [
          'MediGroup<br />S1', 'MediGroup<br />S2', 'Medi<br/>Clinic Plus'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisci'
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

.group-table-mobile{
  .v-tab {
    width: 33.3%;
    max-width: 33.33%;
    padding-left: 0;
    padding-right: 0;
    color: #fff!important;
    background: #035370;
  }
  .v-tab:first-child{
    opacity: 1;
  }

  .v-tab:last-child{
    opacity: 0.4;
  }
  .v-slide-group__prev{
    display: none;
  }

  .v-slide-group__next{
    display: none!important;
  }
}

</style>
