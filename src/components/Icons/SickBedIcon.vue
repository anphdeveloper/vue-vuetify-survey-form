<template>
  <div class="sick-bed"></div>
</template>

<script>
export default {
  name: "SickBedIcon",
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
.sick-bed {
  margin-top: 8px;
  background: url("../../assets/icons/krankenbett.svg");
  background-color: transparent !important;
  width: 42px;
  height: 48px;
  background-repeat: no-repeat;
  display: inline-block;
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 34px;
    background-size: cover;
  }
}
</style>
