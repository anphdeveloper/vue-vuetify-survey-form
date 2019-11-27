<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel panelTitle :showBackButton="false">
            <template v-slot>
              <p
                :class="[
                  $vuetify.breakpoint.smAndUp ? 'headline px-10' : 'title'
                ]"
              >
                Bitte aktivieren Sie JavaScript!
              </p>
              <p
                :class="[
                  $vuetify.breakpoint.smAndUp ? 'body-2 px-10' : 'caption'
                ]"
              >
                JavaScript ist in Ihrem Browser deaktiviert. Die Verwendung der
                App ist ohne JavaScript nicht möglich. Aktivieren Sie JavaScript
                in Ihrem Browser.
              </p>
              <v-btn
                depressed
                large
                color="danger white--text"
                class="mt-4"
                :block="$vuetify.breakpoint.xs"
                @click="onClickStart"
                >Seite NEU LADEN</v-btn
              >
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
  name: "Start",
  components: {
    MainPanel
  },
  methods: {
    onClickStart() {
      this.$router.push({ name: "Start" });
    }
  },

  mounted() {
    this.$store.dispatch("setPagesProgress", 7);
  }
};
</script>
