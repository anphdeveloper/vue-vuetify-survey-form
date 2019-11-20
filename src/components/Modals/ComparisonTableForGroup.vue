<template>
  <v-card>
    <div class="px-2 pt-2">
      <v-btn absolute icon right small @click="closeDialog">
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
</template>

<script>
import SickBedIcon from "@/components/Icons/SickBedIcon"
export default {
  name: "ComparisonTableForGroup",
  components: {
    SickBedIcon
  },
  props: ["closeDialog"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped></style><template></template>

<script>
import MainPanel from "@/components/MainPanel.vue";
export default {
  name: "Header",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped></style>
