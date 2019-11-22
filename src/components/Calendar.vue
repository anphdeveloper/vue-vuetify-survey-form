<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="290px"
    class="calendar-menu "
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Einstellungsdatum"
        placeholder="TT.MM.JJJJ"
        readonly
        v-on="on"
        class="meta-pro-text primary--text"
      >
        <template v-slot:append>
          <calendar-icon></calendar-icon>
        </template>
      </v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable locale="de-DE">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Stornieren</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import CalendarIcon from "@/components/Icons/CalendarIcon";
export default {
  name: "Calendar",
  components: {
    CalendarIcon
  },
  props: {},
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.calendar-menu {
}
</style>
