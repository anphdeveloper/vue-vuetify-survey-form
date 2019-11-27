<template>
  <div
    :class="ratePanelData.panelBackground"
    @click="clickContainer($event)"
    :style="{
      border: `1.5px solid ${
        ratePanelData.checked ? ratePanelData.categoryColor : 'transparent'
      }!important`
    }"
  >
    <v-container class="pa-0">
      <v-row class="px-1 title-row">
        <p
          :class="{
            subtitle: $vuetify.breakpoint.lgAndUp,
            caption: $vuetify.breakpoint.md,
            subtitle: $vuetify.breakpoint.smAndDown,
            'mb-1 text-left pl-4 pt-2 ml-2 grey--text mr-4': true
          }"
        >
          {{ ratePanelData.panelTitle }}
        </p>
        <v-spacer></v-spacer>
        <div
          class="mr-1 white top-label-icon elevation-0 px-0 text-center d-flex align-center justify-center"
          v-if="ratePanelData.isTop"
        >
          <span class="white--text">TOP</span>
        </div>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-radio-group
            v-model="panelSelected"
            :mandatory="false"
            class="mt-0 pl-4"
            color="primary"
            hide-details
            v-if="ratePanelData.haveRadioOption"
          >
            <v-radio
              value="radio-1"
              class="rd-rate"
              hide-details
              id="radioButton"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="8" class="pt-4">
          <span class="subtitle-1 grey--text text--darken-3"
            >{{ $helper.commonHelper.germanFormat(ratePanelData.panelRate) }}€
            mtl.</span
          >
        </v-col>
      </v-row>
    </v-container>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RateSelectionPanel",
  components: {},
  props: ["ratePanelData", "checkRate"],
  data() {
    return {
      panelSelected: null
    };
  },
  methods: {
    clickContainer(event) {
      if (!event.target.className.includes("v-icon"))
        this.checkRate(this.$props.ratePanelData.id);
    }
  },
  watch: {
    panelSelected: function(newVal) {
      if (newVal == "radio-1") this.checkRate(this.$props.ratePanelData.id);
    },
    "ratePanelData.checked": function(newVal) {
      this.panelSelected = newVal ? "radio-1" : null;
    }
  },
  created() {
    this.panelSelected = this.$props.ratePanelData.checked ? "radio-1" : null;
  }
};
</script>
<style scoped lang="scss">
.pa-0 {
  position: relative;
}
.title-row {
  height: 50px;
}
.top-label-icon {
  background: url("../assets/icons/gothaer_bubble.svg");
  background-color: transparent !important;
  margin-right: 0px !important;
  width: 44px;
  height: 48px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  @media only screen and (max-width: 1200px) {
    width: 40px;
    height: 44px;
    margin-right: 0px !important;
    background-size: cover;
  }
}

.rd-rate {
  & i {
    font-size: 32px !important;
  }

  & [class*="__ripple"] {
    left: -7.5px;
    width: 32px;
    height: 32px;
    top: calc(50% - 23px);
  }
}
</style>
