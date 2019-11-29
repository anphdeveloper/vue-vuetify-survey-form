<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle" :showBackButton="false">
            <template v-slot>
              <v-row justify="center" class="mb-5">
                <checked-icon></checked-icon>
              </v-row>
              <p class="font-weight-bold title">
                Ihr Antrag auf eine private Zusatzversicherung wurde versendet
              </p>
              <p>
                Ihre Versicherungsunterlagen erhalten Sie nach Prüfung per Post.
              </p>
            </template>
          </main-panel>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import CheckedIcon from "@/components/Icons/CheckedIcon";
import MainPanel from "@/components/MainPanel.vue";
export default {
  name: "ManyThanks",
  components: {
    MainPanel,
    CheckedIcon
  },
  data() {
    return {
      panelTitle: "Vielen Dank"
    };
  },
  watch: {},
  methods: {},
  mounted() {
    this.$store.dispatch("setPagesProgress", 100);
  }
};
</script>

<style lang="scss"></style>
<style lang="scss" scoped>
.checked {
  width: 56px;
  height: 55px;
}
</style>
