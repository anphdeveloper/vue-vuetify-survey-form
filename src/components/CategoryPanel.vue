<template>
  <div :class="panelBackground + ' pa-4'">
    <v-layout>
      <v-row class="px-2">
        <p class="mb-1 subtitle text-left pl-2 pt-1 white--text">{{ panelTitle }}</p>
        <v-spacer></v-spacer>
        <v-btn class="mr-1 white close-icon elevation-0 px-0" @click="onClickCheckPanel">
          <v-icon large :color="panelBackground" v-if="panelChecked">mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-layout>

    <p :class="{ 'mb-0 ' : !descriptionCollapsed,  'caption text-left white--text': true}"
    v-html="panelDescription"
    >

    </p>
    <div class="white--text caption text-left" v-if="descriptionCollapsed">
      <p class="mb-1" v-for="(feature, index) in panelFeature" :key="index">
        <v-icon color="white">mdi-check</v-icon><span class="ml-1">{{feature}}</span>
      </p>
      <v-btn
        block
        class="white mt-4 btn-info white--text elevation-0 py-2"
        >INFOBROSCHÜRE
        <v-icon class="white--text ml-4">
          mdi-arrow-collapse-down
        </v-icon>
      </v-btn>
    </div>

    <v-btn icon class="plus-icon" @click="descriptionCollapsed = !descriptionCollapsed">
      <v-icon large :class="`${panelBackground}`+ '--text'" v-if="!descriptionCollapsed">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon large :class="`${panelBackground}`+ '--text'" v-if="descriptionCollapsed">
        mdi-minus-circle-outline
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "PlanPanel",
  props: {
    id: Number,
    panelTitle: String,
    panelDescription: String,
    panelBackground: String,
    panelFeature: Array,
    checked: Boolean,
    checkPanel: Function
  },
  data() {
    return {
      descriptionCollapsed: false,
      panelChecked: false
    };
  },
  methods: {
    onClickCheckPanel(){
      this.checkPanel(this.id);
    }
  },
  watch: {
    checked: function(newVal){
      this.panelChecked = newVal;
    }
  },
  created(){
    this.panelChecked = this.$props.checked;
  }
};
</script>
<style scoped lang="scss">

.close-icon {
  height: 30px !important;
  min-height: 30px !important;
  width: 30px !important;
  min-width: 30px !important;
  border-radius: 0px;
  & i {
    margin-top: -2px;
  }
}

.btn-info {
  background-color: transparent !important;
  border: 1px solid #ffffff;
  height: 40px !important;
}

.plus-icon {
  z-index: 10;
  background-color: white;
  margin-bottom: -50px;
}
</style>