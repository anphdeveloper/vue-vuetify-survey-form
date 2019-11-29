<template>
  <div class="back"></div>
</template>

<script>
export default {
  name: "GoBackCircleIcon",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.back {
  background: url("../../assets/icons/arrow_back.svg");
  background-color: transparent !important;
  width: 36px;
  height: 36px;
  background-size: 80%;
  background-position-y: 10px;
  background-position-x: 3px;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>
