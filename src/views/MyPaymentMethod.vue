<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div
                :class="{
                  'px-10': $vuetify.breakpoint.smAndUp,
                  'px-5': $vuetify.breakpoint.xs
                }"
              >
                <v-form
                  class="pa-0 payment-form"
                  ref="personalForm"
                  lazy-validation
                >
                  <div
                    v-for="(product, index) in products.filter(
                      product => product.checked
                    )"
                    :key="index"
                    class="category-list"
                  >
                    <v-divider class="my-4" v-if="index != 0" />
                    <v-row class="px-3 align-center">
                      <h5 class="text-start inline-box width-200" full-width>
                        {{ product.panelTitle }} -
                        {{ product.selectedProductName }}:
                      </h5>
                      <h2 class="text-start inline-box" full-width>
                        {{
                          $helper.commonHelper.germanFormat(
                            getRateForPeriod(product.selectedRate)
                          )
                        }}
                        {{ typePeriod }}
                      </h2>
                    </v-row>
                  </div>

                  <v-row justify="center">
                    <v-col cols="12" class="iconContainer">
                      <p class="pb-0 mb-0 mt-4 text-start caption">Zahlweise</p>
                      <v-select
                        class="mt-0 pt-0 meta-pro-text primary--text"
                        :items="paymentOptions"
                        v-model="paymentOption"
                        append-icon="mdi-chevron-down"
                        color="primary"
                        :rules="[v => !!v || '']"
                      ></v-select>
                      <div
                        v-if="paymentOption === 'jährlich (4% Nachlass)'"
                        class="mr-1 white top-label-icon elevation-0 px-0 text-center d-flex align-center justify-center"
                      >
                        <span class="white--text">TOP</span>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12">
                      <v-text-field
                        v-model="ibanNumber"
                        label="IBAN"
                        :type="$vuetify.breakpoint.xs ? 'number' : ''"
                        prefix="DE"
                        hint
                        :rules="[v => (!!v && validateIBAN(v)) || '']"
                        @keyup.native="validateSpaceFormatter($event)"
                        @keypress="limitIban($event, ibanNumber)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <div class="text-with-inputcontrol-icon mt-6">
                    <v-checkbox
                      large
                      v-model="agreeCheckBox"
                      class="mt-0 pt-0"
                      :rules="[v => !!v || '']"
                    />
                    <p class="text-start body-2 mb-1">
                      Ich stimme dem SEPA Lastschriftverfahren der Banken zu.
                      <span
                        v-if="showReadMore"
                        class="text-start body-2 mb-1 primary--text cursor-pointer"
                        @click="onClickShowMore"
                        >mehr…</span
                      >
                      <span v-if="!showReadMore">
                        Ich ermächtige die Gothaer Allgemeine Versicherung AG
                        die Zahlungen von meinem Konto mittels Lastschrift
                        einzuziehen. Zugleich weise ich mein Kreditinstitut an,
                        die von dem o.g. Zahlungsempfänger auf mein Konto
                        gezogenen Lastschriften einzulösen. Ich kann binnen 8
                        Wochen ab dem Belastungsdatum die Erstattung der Zahlung
                        verlangen. Es gelten die Bedingungen meines
                        Kreditinstituts. Mit der Bestätigung erteilen Sie uns
                        Ihre Einwilligung, Uhrzeit, Datum der Transaktion sowie
                        die IP-Adresse zu speichern.
                        <span
                          class="text-start body-2 mb-1 primary--text cursor-pointer"
                          @click="onClickHideMore"
                          >…weniger</span
                        >
                      </span>
                    </p>
                  </div>
                </v-form>
                <v-btn
                  depressed
                  large
                  color="danger"
                  :block="$vuetify.breakpoint.xs"
                  class="mt-7 white--text"
                  @click="onClickNext"
                  >Weiter</v-btn
                >
              </div>
            </template>
          </main-panel>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

import MainPanel from "@/components/MainPanel.vue";

export default {
  name: "MyPaymentMethod",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Meine Zahlweise",
      paymentOption: "monatlich",
      paymentOptions: [
        "monatlich",
        "1/4 jährlich",
        "1/2 jährlich",
        "jährlich (4% Nachlass)"
      ],
      ibanNumber: "",
      agreeCheckBox: false,
      showReadMore: true,
      products: null,
      typePeriod: "€ / Monat"
    };
  },
  watch: {
    paymentOption: function(newVal) {
      switch (newVal) {
        case "monatlich":
          this.typePeriod = "€ / Monat";
          break;
        case "1/4 jährlich":
          this.typePeriod = "€ / Vierteljahr";
          break;
        case "1/2 jährlich":
          this.typePeriod = "€ / Halbjahr";
          break;
        case "jährlich (4% Nachlass)":
          this.typePeriod = "€ / Jahr";
          break;
      }
    },
    ibanNumber: function(newVal) {
      if (!newVal.match(/\s/g) && !this.$vuetify.breakpoint.xs) {
        newVal = newVal.replace(/\s/g, "");
        this.ibanNumber = newVal.replace(/(.{4})/g, "$1 ");
      }
    }
  },
  methods: {
    onClickNext() {
      if (this.$refs.personalForm.validate() && this.agreeCheckBox) {
        this.$store.dispatch("profile/setPersonalData", {
          paymentOption: this.paymentOption,
          ibanNumber: "DE" + this.ibanNumber.replace(/\s/g, "")
        });
        this.$router.push({ name: "ExplanationAndInformation" });
      } else {
        console.log("validation failed");
      }
    },
    onClickShowMore() {
      this.showReadMore = false;
    },
    onClickHideMore() {
      this.showReadMore = true;
    },
    validateIBAN(iban) {
      let IBAN = require("iban");
      return IBAN.isValid("DE" + iban);
    },
    validateSpaceFormatter(event) {
      if (event.key !== "Backspace" && !this.$vuetify.breakpoint.xs) {
        this.ibanNumber = this.ibanNumber.replace(/\s/g, "");
        this.ibanNumber = this.ibanNumber.replace(/(.{4})/g, "$1 ");
      }
    },
    limitIban(event, iban) {
      if (iban.replace(/\s/g, "").length > 19) event.preventDefault();
      console.log(event.key);
      if (/^\d+$/.test(event.key)) return true;
      else event.preventDefault();
    },
    getRateForPeriod(rate) {
      let rateForType = 0;
      switch (this.paymentOption) {
        case "monatlich":
          rateForType = rate;
          break;
        case "1/4 jährlich":
          rateForType = rate * 3;
          break;
        case "1/2 jährlich":
          rateForType = rate * 6;
          break;
        case "jährlich (4% Nachlass)":
          rateForType = rate * 12 * 0.96;
          break;
        default:
          rateForType = rate;
          break;
      }
      return rateForType.toFixed(2);
    },
    fillData() {
      this.products = this.$store.state.products.categories
        ? this.$store.state.products.categories
        : [];
      let storeIbanNumber = this.$store.state.profile.personalData.ibanNumber;
      this.ibanNumber = storeIbanNumber
        ? storeIbanNumber.startsWith("DE")
          ? storeIbanNumber.slice(2)
          : storeIbanNumber
        : "";

      this.paymentOption =
        this.$store.state.profile.personalData.paymentOption != ""
          ? this.$store.state.profile.personalData.paymentOption
          : "monatlich";
      console.log(this.$store.state.profile.personalData.agreeSEPA);
      this.agreeCheckBox =
        this.$store.state.profile.personalData.agreeSEPA == undefined ||
        this.$store.state.profile.personalData.agreeSEPA == null
          ? false
          : this.$store.state.profile.personalData.agreeSEPA;
    }
  },
  created() {
    this.fillData();
  },
  mounted() {
    this.$store.dispatch("setPagesProgress", 70);
  }
};
</script>

<style lang="scss" scoped>
.closeButton {
  position: absolute;
  top: 8px;
  right: 8px;
}
.cursor-pointer {
  cursor: pointer;
}
.text-with-inputcontrol-icon {
  display: flex;
  align-items: flex-start;
  .v-input--checkbox {
    display: inline-flex;
  }
  .v-icon {
    display: inline-flex;
  }
  p {
    display: inline-block;
    margin-top: 2px;
  }
}
.iconContainer {
  position: relative;
}
.top-label-icon {
  background: url("../assets/icons/gothaer_bubble.svg");
  background-color: transparent !important;
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 10px;
  left: -45px;
  @media only screen and (max-width: 599px) {
    width: 32px;
    height: 34px;
    margin-right: 10px !important;
    background-size: cover;
    bottom: 24px;
    left: -26px;
    font-size: 14px;
  }
}
.px-20 {
  padding-left: 80px;
  padding-right: 80px;
}
.inline-box {
  display: inline-block;
}
.width-100 {
  width: 100px;
}
.width-200 {
  width: 200px;
}
.payment-form {
  .category-list {
    &:last-child {
      display: none;
    }
  }
}
</style>
