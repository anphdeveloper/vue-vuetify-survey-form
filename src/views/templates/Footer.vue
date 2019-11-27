<template>
  <v-footer
    height="auto"
    :class="{
      'mobile-layout': $vuetify.breakpoint.xs,
      'footer justify-start pb-4 caption content': true
    }"
  >
    <span
      :class="{
        'pl-0 pr-12': $vuetify.breakpoint.xs,
        'px-3 primary--text text-left': true
      }"
      >© Gothaer Krankenversicherung AG, Köln. Alle Rechte vorbehalten.</span
    >
    <div>
      <v-btn
        text
        :ripple="false"
        target="_blank"
        href="http://www.medigroup.gothaer.de/de/navigationslisten/fusszeile/impressum/Impressum_1.jsp?IM=30414133323135433230"
        class="px-3 primary--text caption text-capitalize btn-link"
        >Impressum</v-btn
      >
      <v-btn
        text
        :ripple="false"
        target="_blank"
        href="http://www.medigroup.gothaer.de/de/navigationslisten/fusszeile/datenschutz/PGK_Datenschutz.jsp?IM=30414133323135433230"
        class="px-3 primary--text caption text-capitalize btn-link"
        >Datenschutz</v-btn
      >
    </div>
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
.mobile-layout {
  flex-direction: column;
  align-items: flex-start;
}
@media only screen and (max-width: 600px) {
  .footer {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
}
</style>
