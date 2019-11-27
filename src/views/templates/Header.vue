<template>
  <div>
    <v-app-bar color="white" dark>
      <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>
      <v-toolbar-title class="primary--text display-1"
        >BMW Group</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon class="pr-12 py-1">
        <div class="right-watermark"></div>
      </v-btn>
    </v-app-bar>
    <template>
      <v-progress-linear
        :value="progress"
        color="quaternary"
      ></v-progress-linear>
    </template>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      progress: 0
    };
  },
  computed: {},
  watch: {},

  mounted() {
    this.progress = this.$store.state.pagesProgress;
    this.$store.watch(
      (state, getters) => getters.getPagesProgress,
      n => {
        this.progress = n;
      }
    );
  }
};
</script>
<style scoped>
.right-watermark {
  background-image: url("../../assets/img/right-watermark.png");
  width: 80px;
  height: 40px;
  background-size: cover;
}
</style>
