<template>
  <div class="sick-bed">
  </div>
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
<style lang="scss">
.sick-bed{
  margin-top: 8px;
  background: url("../../assets/icons/krankenbett.svg");
  background-color: transparent !important;
  width: 42px;
  height: 48px;
  background-repeat: no-repeat;
  display: inline-block;
  @media only screen and (max-width: 1200px){
    width: 32px;
    height: 34px;
    margin-right: 10px!important;
    background-size: cover;
  }
}
</style>