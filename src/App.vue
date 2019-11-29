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

.danger {
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
}

#app {
  font-family: "MetaPro-Normal", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-application {
  font-family: "MetaPro-Normal", sans-serif !important;
}
.tooltip-with-top-arrow {
  border-radius: unset !important;
  opacity: 1 !important;
  box-shadow: unset !important;
  padding-top: 0px;
  background-color: transparent !important;
  &::before {
    content: "";
    position: relative;
    display: block;
    width: 0px;
    left: 50%;
    top: 0;
    border: 15px solid transparent;
    border-top: 0;
    border-bottom: 15px solid #00718f;
    transform: translate(-50%, calc(-100% + 15px));
    z-index: 1000;
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

  .bold {
    font-family: "MetaPro-Bold" !important;
    font-weight: 900;
  }
  .meta-pro-black {
    font-family: "MetaPro-Black" !important;
    font-weight: 900;
  }
  &.primary--text {
    .v-icon {
      font-family: "MetaPro-Normal" !important;
      color: #00718f;
    }
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

input[type="number"] {
  -moz-appearance: textfield;
  // display: none
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}

// input[type="number"]::-webkit-outer-spin-button,
// input[type="number"]::-webkit-inner-spin-button {
//   -webkit-appearance: none;
// }
</style>
