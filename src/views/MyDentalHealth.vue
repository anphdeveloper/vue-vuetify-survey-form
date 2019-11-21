<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <p
                  :class="
                    [$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'] +
                      ' text-start mb-8'
                  "
                >
                  Wie viele fehlende, noch nicht ersetzte Zähne haben Sie?
                </p>
                <p class="text-start body-2 mb-1">Ausgenommen Weisheitszähne, Lückenschlüsse bzw. Milchzähne, die aufgrund des natürlichen Zahnwechsels fehlen.</p>
                

                <v-btn
                  depressed
                  large
                  color="danger"
                  class="mt-4 white--text"
                  @click="onClickStartCalc"
                >Preise Berechnen</v-btn>
              </div>
            </template>
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
  name: "MyDentalHealth",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Meine Zahngesundheit"
    };
  },
  methods: {
    onClickNext() {
      if (this.$refs.dobForm.validate()) {
        this.$router.push({ name: "Dashboard" });
      }
    }
  },
  mounted(){
    this.$store.dispatch('setPagesProgress', 40);
  }
};
</script>

<style lang="scss">

</style>
