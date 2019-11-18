<template>
  <div :class="panelBackground">
    <v-layout>
      <v-row class="px-1 title-row">
        <p class="mb-1 subtitle text-left pl-4 pt-2 ml-2 grey--text">{{ panelTitle }}</p>
        <v-spacer></v-spacer>
        <div class="mr-1 white top-label-icon elevation-0 px-0 text-center d-flex align-center justify-center" v-if="isTop">
          <span class="white--text">TOP</span>
        </div>
      </v-row>
    </v-layout>
    <div class="white--text caption text-left">
      <v-layout>
        <v-row wrap>
          <v-col cols="12" sm="3" class="mt-0 pt-0">
            <v-radio-group v-model="panelSelected" :mandatory="false" class="mt-0 pl-4" color="primary" hide-details v-if="haveRadioOption">
              <v-radio value="radio-1" active-class="rd-rate" hide-details></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" class="text-center pt-0 mt-1">
            <span class="subtitle-1 grey--text text--darken-3" >{{panelRate + ' € mtl.'}}</span>
          </v-col>
        </v-row>
      </v-layout>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RateSelectionPanel",
  props: {
    id: Number,
    panelTitle: String,
    haveRadioOption: Boolean,
    panelBackground: String,
    panelRate: String,
    checked: Boolean,
    checkRate: Function,
    isTop: Boolean
  },
  data() {
    return {
      panelSelected: null
    };
  },
  methods: {},
  watch: {},
  created() {
    this.panelSelected = this.$props.checked? 'radio-1': null;
  }
};
</script>
<style scoped lang="scss">
.title-row{
  height: 50px;
}
.top-label-icon {
  background: url("../assets/icons/gothaer_bubble.svg");
  background-color: transparent!important;
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
}

.rd-rate{
  & /deep/ i {
    font-size: 32px!important;
  }
}
</style>