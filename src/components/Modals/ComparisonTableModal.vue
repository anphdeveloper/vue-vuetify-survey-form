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
          <v-simple-table
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
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SickBedIcon from "@/components/Icons/SickBedIcon";
export default {
  name: "ComparisonTableModal",
  components: {
    SickBedIcon
  },
  props: ["isComparisonForStationary"],
  data() {
    return {
      show: false
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
</style>
