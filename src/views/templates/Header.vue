<template>
  <div>
    <v-app-bar color="white" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="primary--text display-1">Group</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="pr-12 py-1">
        <div class="right-watermark"></div>
      </v-btn>

      </v-app-bar>
      <template>
        <v-progress-linear value="15" color="quaternary"></v-progress-linear>
      </template>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style scoped>
.right-watermark{
  background-image: url('../../assets/img/right-watermark.png');
  width: 80px;
  height: 40px;
  background-size: cover;
}
</style>