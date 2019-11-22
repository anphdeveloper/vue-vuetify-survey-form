<template>
  <div :class="panelBackground + ' middle-title-panel d-flex'">
    <span :class="leftTitleClass + ' left-title'">{{ leftTitle }}</span>
    <span :class="middleTitleClass + ' middle-title'">{{ middleTitle }}</span>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "MiddleTitlePanel",
  components: {},
  props: {
    panelBackground: String,
    leftTitle: String,
    middleTitle: String,
    leftTitleClass: String,
    middleTitleClass: String
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.middle-title-panel {
  width: 100%;
}
.left-title {
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
.middle-title {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 900px) {
    position: relative;
    left: unset;
    right: unset;
    margin: auto;
    width: 100%;
  }
}
</style>
