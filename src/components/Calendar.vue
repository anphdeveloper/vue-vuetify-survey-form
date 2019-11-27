<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="290px"
    class="calendar-menu"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateFormatted"
        label="Einstellungsdatum"
        placeholder="TT.MM.JJJJ"
        readonly
        v-on="on"
        @blur="date = parseDate(dateFormatted)"
        class="meta-pro-text primary--text"
      >
        <template v-slot:append>
          <calendar-icon></calendar-icon>
        </template>
      </v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable locale="de-DE">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">abbrechen</v-btn>
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
      date: null,
      dateFormatted: null,
      menu: false
    };
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(new Date(this.date));
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      return this.$helper.commonHelper.getGermanFormatDate(date);
    },
    parseDate(date) {
      if (!date) return null;
      const [day, month, year] = date.split(".");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.calendar-menu {
}
</style>
