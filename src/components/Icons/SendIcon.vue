<template>
  <div class="send"></div>
</template>

<script>
export default {
  name: "SendIcon",
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
.send {
  margin-bottom: 4px;
  background: url("../../assets/icons/send.svg");
  background-color: transparent !important;
  width: 42px;
  height: 36px;
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
