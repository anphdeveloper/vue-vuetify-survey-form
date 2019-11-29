<template>
  <div :class="categoryPanelData.panelBackground + ' pa-4'">
    <v-layout>
      <v-row class="px-2">
        <p class="mb-1 title text-left pl-2 pt-1 white--text">
          {{ categoryPanelData.panelTitle }}
        </p>
        <v-spacer></v-spacer>
        <v-btn
          class="mr-1 white close-icon elevation-0 px-0"
          @click.prevent="
            onClickCheckPanel();
            clickContainer($event);
          "
          id="panelCheckBoxButton"
        >
          <v-icon
            large
            :color="categoryPanelData.panelBackground"
            v-if="categoryPanelData.checked"
            id="panelCheckBoxIcon"
            >mdi-close</v-icon
          >
        </v-btn>
      </v-row>
    </v-layout>

    <p
      :class="{
        'mb-0 ': !categoryPanelData.expanded,
        'body-2 text-left white--text': true
      }"
      v-html="categoryPanelData.panelDescription"
    ></p>
    <div
      class="white--text caption text-left"
      v-if="categoryPanelData.expanded"
    >
      <p
        class="mb-1 body-2"
        v-for="(feature, index) in categoryPanelData.panelFeature"
        :key="index"
      >
        <v-icon color="white">mdi-check</v-icon
        ><span class="ml-1 body-2">{{ feature }}</span>
      </p>
      <v-btn
        block
        class="white mt-4 btn-info white--text elevation-0 py-2"
        id="infoBtn"
        @click="onClickInfo"
        >INFOBROSCHÜRE
        <v-icon class="white--text ml-4">
          mdi-arrow-collapse-down
        </v-icon>
      </v-btn>
    </div>

    <v-btn icon class="plus-icon" @click="onClickExpandPanel">
      <v-icon
        large
        id="plusIcon"
        :class="`${categoryPanelData.panelBackground}` + '--text'"
        v-if="!categoryPanelData.expanded"
      >
        mdi-plus-circle-outline
      </v-icon>
      <v-icon
        large
        id="minusIcon"
        :class="`${categoryPanelData.panelBackground}` + '--text'"
        v-if="categoryPanelData.expanded"
      >
        mdi-minus-circle-outline
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "CategoryPanel",
  props: {
    // id: Number,
    // panelTitle: String,
    // panelDescription: String,
    // panelBackground: String,
    // panelFeature: Array,
    // checked: Boolean,
    categoryPanelData: Object,
    checkPanel: Function,
    expandPanel: Function
  },
  data() {
    return {
      descriptionCollapsed: false,
      panelChecked: false
    };
  },
  methods: {
    onClickCheckPanel() {
      this.checkPanel(this.$props.categoryPanelData.id);

      if (!this.$props.categoryPanelData.expanded) {
        this.expandPanel(
          this.$props.categoryPanelData.id,
          !this.$props.categoryPanelData.expanded
        );
      }
    },
    onClickExpandPanel() {
      this.expandPanel(
        this.$props.categoryPanelData.id,
        !this.$props.categoryPanelData.expanded
      );
    },
    clickContainer(event) {
      if (event.target.id != "plusIcon" && event.target.id != "minusIcon") {
        if (!this.$props.categoryPanelData.checked) {
          this.expandPanel(
            this.$props.categoryPanelData.id,
            !this.$props.categoryPanelData.expanded
          );
        }
      }
    },
    onClickInfo() {
      window.open(
        "http://www.medigroup.gothaer.de/media/pgk_media/dokumente/antragsunterlagen_der_vertriebspartner/bmw/hb/" +
          this.$props.categoryPanelData.panelDocsLink,
        "_blank"
      );
    }
  },
  watch: {},
  created() {
    this.panelChecked = this.$props.categoryPanelData.checked;
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
  z-index: 1;
  background-color: white;
  margin-bottom: -50px;
}
</style>
