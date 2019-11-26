<template>
  <div class="red-cross"></div>
</template>

<script>
export default {
  name: "RedCrossIcon",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
.red-cross {
  margin-top: 1px;
  background: url("../../assets/icons/cross_red.svg");
  background-color: transparent !important;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  @media only screen and (max-width: 1200px) {
    width: 24px;
    height: 24px;
    margin-right: 10px !important;
    background-size: cover;
  }
}
</style>
