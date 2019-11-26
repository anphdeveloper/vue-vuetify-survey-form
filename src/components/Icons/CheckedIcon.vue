<template>
  <div class="checked"></div>
</template>

<script>
export default {
  name: "CheckedIcon",
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
.checked {
  margin-top: 5px;
  background: url("../../assets/icons/checked.svg");
  background-color: transparent !important;
  width: 34px;
  height: 33.5px;
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
