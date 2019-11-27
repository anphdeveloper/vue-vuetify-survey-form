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
  margin-bottom: 4px;
  background: url("../../assets/icons/arrow_back.svg");
  background-color: transparent !important;
  width: 36px;
  height: 36px;
  background-size: 80%;
  background-position-y: 10px;
  background-position-x: 3px;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1.5px solid #00718f;
  display: inline-block;
}
</style>
