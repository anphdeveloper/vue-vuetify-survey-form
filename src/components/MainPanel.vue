<template>
  <div
    :class="{ 'with-title': panelTitle, higher: $vuetify.breakpoint.mdAndUp }"
  >
    <h2 class="mb-2">{{ panelTitle }}</h2>
    <v-card :class="{'pa-10':$vuetify.breakpoint.mdAndUp, 'pa-6':$vuetify.breakpoint.smAndDown, 'mx-auto':true}" outlined>
      <slot>No slot content defined</slot>
    </v-card>
    <v-row justify="start" :class="{'mt-4': $vuetify.breakpoint.xs, 'px-3': true}" v-if="showGoBackButton">
      <v-btn
        text
        class="px-3 primary--text body-1 btn-link"
        large
        :ripple="false"
        @click="onClickGoBack"
      >
        <v-icon color="primary" v-if="$vuetify.breakpoint.mdAndUp">mdi-arrow-left</v-icon>
        <go-back-circle-icon v-if="$vuetify.breakpoint.smAndDown"></go-back-circle-icon>
        <span v-if="$vuetify.breakpoint.mdAndUp">ZURÜCK</span>
      </v-btn>
      
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex"
import  GoBackCircleIcon  from "@/components/Icons/GoBackCircleIcon.vue"
export default {
  name: "MainPanel",
  components: {
    GoBackCircleIcon
  },
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
