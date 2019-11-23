<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
          </main-panel>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

import MainPanel from "@/components/MainPanel.vue";
export default {
  name: "ManyThanks",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Vielen Dank",
    };
  },
  watch: {},
  methods: {},
  mounted() {
    this.$store.dispatch("setPagesProgress", 100);
  }
};
</script>

<style lang="scss">
</style>
<style lang="scss" scoped>
</style>