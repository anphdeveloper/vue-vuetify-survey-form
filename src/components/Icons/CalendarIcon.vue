<template>
  <div class="calendar"></div>
</template>

<script>
export default {
  name: "CalendarIcon",
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
.calendar {
  margin-bottom: 4px;
  background: url("../../assets/icons/calendar.svg");
  background-color: transparent !important;
  width: 42px;
  height: 36px;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  // @media only screen and (max-width: 1200px) {
  @media only screen and (max-width: 599px) {
    width: 24px;
    height: 24px;
    margin-right: 10px !important;
    background-size: cover;
  }
}
</style>
