<template>
  <v-content class="content">
    <v-container fill-height>
      <router-view />
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
// @import "~@/assets/scss/main.scss";
// .v-select__selection {
//   font-family: "MetaPro-Normal";
//   color: #00718f;
// }
</style>
