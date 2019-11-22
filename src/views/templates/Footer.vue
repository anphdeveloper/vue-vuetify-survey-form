<template>
  <v-footer
    height="auto"
    class="footer justify-start pb-4 caption content"
  >
    <span :class="{'pl-0 pr-12':$vuetify.breakpoint.xs, 'px-3 primary--text': true}"
      >© Gothaer AG, Köln. Alle Rechte vorbehalten.</span
    >
    <router-link to="/inputBrithDay" tag="span">
      <v-btn text :class="{'pl-0': $vuetify.breakpoint.xs, 'px-3 primary--text caption text-capitalize': true}"
        >Impressum</v-btn
      >
    </router-link>
    <router-link to="/inputBrithDay" tag="span">
      <v-btn text class="px-3 primary--text caption text-capitalize"
        >Datenschutz</v-btn
      >
    </router-link>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .footer {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
}
</style>
