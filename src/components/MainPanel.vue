<template>
  <div
    :class="{ 'with-title': panelTitle, higher: $vuetify.breakpoint.mdAndUp }"
  >
    <h2 class="mb-2">{{ panelTitle }}</h2>
    <v-card :class="{'pa-10':$vuetify.breakpoint.mdAndUp, 'pa-6':$vuetify.breakpoint.smAndDown, 'mx-auto':true}" outlined>
      <slot>No slot content defined</slot>
    </v-card>
    <v-row justify="start" class="px-3 mt-2" v-if="showGoBackButton">
      <v-btn
        text
        class="px-3 primary--text body-1 btn-link"
        large
        :ripple="false"
        @click="onClickGoBack"
      >
        <v-icon color="primary" v-if="$vuetify.breakpoint.mdAndUp">mdi-arrow-left</v-icon>
        <v-icon color="primary" large v-if="$vuetify.breakpoint.smAndDown">mdi-arrow-left-circle-outline</v-icon>
        <span v-if="$vuetify.breakpoint.mdAndUp">ZURÜCK</span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MainPanel",
  props: {
    panelTitle: String,

  },
  data() {
    return {
      showGoBackButton: true
    };
  },
  computed: {
    ...mapState({
      pageProgress: state => state.pagesProgress
    })
  },
  watch: {
    pageProgress: function(newVal){
      this.showGoBackButton = newVal == 10 ? false : true;
    }
  },
  methods: {
    onClickGoBack() {
      this.$router.go(-1);
    }
  },
  mounted(){
    console.log('pageprogress', this.$store.state.pagesProgress);
    this.showGoBackButton = this.$store.state.pagesProgress == 10 ? false : true;
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
