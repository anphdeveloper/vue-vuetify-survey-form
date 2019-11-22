<template>
  <div id="app">
    <v-app id="inspire">
      <page-header name="page-header" />
      <page-content />
      <page-footer />
    </v-app>
  </div>
</template>
<script>
import PageHeader from "@/views/templates/Header";
import PageContent from "@/views/templates/Content";
import PageFooter from "@/views/templates/Footer";
export default {
  name: "app",
  components: {
    PageHeader,
    PageContent,
    PageFooter
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
#app {
  font-family: "MetaPro-Normal", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tooltip-with-top-arrow {
  border-radius: unset;
  opacity: 1 !important;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 0px;
    left: 50%;
    top: 0;
    border: 15px solid transparent;
    border-top: 0;
    border-bottom: 15px solid #00718f;
    transform: translate(-50%, calc(-100% + 5px));
  }
}

.btn-link {
  margin-left: -15px;
  &:hover::before {
    background: transparent !important;
  }
  &::before {
    background: transparent !important;
  }
}

.meta-pro-text {
  font-family: "MetaPro-Normal" !important;
  &.primary--text {
    .v-select__selections {
      .v-select__selection {
        font-family: "MetaPro-Normal" !important;
        color: #00718f;
      }
    }
    .v-input__control {
      .v-text-field__slot {
        input {
          font-family: "MetaPro-Normal" !important;
          color: #00718f;
        }
        label {
          font-family: "MetaPro-Normal" !important;
        }
      }
    }
  }
}
</style>
