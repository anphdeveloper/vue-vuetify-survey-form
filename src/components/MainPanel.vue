<template>
  <div
    :class="{ 'with-title': panelTitle, higher: $vuetify.breakpoint.mdAndUp }"
  >
    <h2 class="mb-2">{{ panelTitle }}</h2>
    <v-card class="mx-auto pa-10" outlined>
      <slot>No slot content defined</slot>
    </v-card>
    <v-row justify="start" class="px-3">
      <v-btn
        text
        class="px-3 primary--text body-1 btn-link"
        large
        :ripple="false"
        @click="onClickGoBack"
      >
        <v-icon color="primary">mdi-arrow-left</v-icon>ZURÜCK
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MainPanel",
  props: {
    panelTitle: String
  },
  data() {
    return {};
  },
  methods: {
    onClickGoBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
/* .higher {
  margin-top: -10px;
}
.higher.with-title {
  margin-top: -20px;
} */
</style>
