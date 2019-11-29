<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{ 'px-10': $vuetify.breakpoint.smAndUp }">
                <v-form class="pa-0" ref="personalForm" lazy-validation>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="4">
                      <p class="pb-0 mb-0 mt-4 text-start caption">Anrede</p>
                      <v-select
                        class="mt-0 pt-0 meta-pro-text primary--text"
                        :items="salutationOptions"
                        v-model="salutation"
                        append-icon="mdi-chevron-down"
                        color="primary"
                        :rules="[v => !!v || '']"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                      <p class="pb-0 mb-0 mt-4 text-start caption">
                        Titel (optional)
                      </p>
                      <v-select
                        class="mt-0 pt-0 meta-pro-text primary--text"
                        :items="titleOptions"
                        v-model="title"
                        append-icon="mdi-chevron-down"
                        color="primary"
                        :rules="[v => !!v || '']"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="firstGivenName"
                        label="Vorname"
                        hint
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="surname"
                        label="Nachname"
                        hint
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="8">
                      <v-text-field
                        v-model="street"
                        label="Straße"
                        hint
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="streetNo"
                        label="Haus Nr."
                        hint
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="postCode"
                        type="number"
                        label="PLZ"
                        hint
                        :rules="[v => (!!v && v.length == 5) || '']"
                        @keypress="validatePlz($event, postCode, 5)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <v-text-field
                        v-model="place"
                        label="Ort"
                        hint
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="country"
                        label="Land"
                        readonly
                        persistent-hint
                        hint="Wohnsitz in Deutschland ist Pflicht"
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="phoneNo"
                        prefix="+49"
                        label="Telefon- oder Mobilnummer"
                        ref="telephone"
                        type="number"
                        hint
                        persistent-hint
                        @keypress="validatePhoneNo($event)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="emailAddress"
                        label="E-Mail-Adresse"
                        hint
                        :rules="[
                          v => !!v || 'E-Mail wird benötigt',
                          v =>
                            (!!v && $helper.commonHelper.validateEmail(v)) ||
                            'Bitte korrekte E-Mail Adresse eingeben'
                        ]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="professionalActivities"
                        label="Berufliche Tätigkeit"
                        hint
                        :rules="[v => !!v || '']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="12">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                        class="calendar-menu"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="dateFormatted"
                            @input="onInputDate"
                            label="Einstellungsdatum"
                            placeholder="TT.MM.JJJJ"
                            class="meta-pro-text primary--text date-picker"
                            :rules="dateInputRules"
                          >
                            <template v-slot:append>
                              <v-btn icon v-on="on" :ripple="false">
                                <calendar-icon></calendar-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                          <!-- <v-btn v-on="on">
                              <calendar-icon ></calendar-icon>
                          </v-btn>-->
                        </template>
                        <v-date-picker
                          v-model="date"
                          no-title
                          scrollable
                          locale="de-DE"
                          @input="menu = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-radio-group v-model="insuredOption" row class="mt-1">
                    <v-radio label="gesetzlich versichert" value="0"></v-radio>
                    <v-radio label="privat versichert" value="1"></v-radio>
                  </v-radio-group>
                  <div v-if="showWarning && !checkbox">
                    <v-container class="px-0 pb-2 text-with-inputcontrol-icon">
                      <v-icon color="red" class="mr-2"
                        >mdi-information-outline</v-icon
                      >
                      <p
                        :class="
                          [
                            $vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'
                          ] + ' text-start font-weight-bold mb-0'
                        "
                      >
                        Mehr als 20 Tage arbeitsunfähig
                      </p>
                    </v-container>
                    <p class="text-start body-2 mb-1">
                      Falls Sie die Angaben zum Gesundheitszustand nicht
                      bestätigen können, nutzen Sie bitte den
                      <span class="font-weight-black primary--text"
                        >Antrag mit Gesundheitsfragen</span
                      >.
                    </p>
                  </div>
                  <div v-if="showInsureWarningForPrivate">
                    <v-container
                      class="px-0 pb-2 text-with-inputcontrol-icon pt-0"
                    >
                      <v-icon color="red" class="mr-2"
                        >mdi-information-outline</v-icon
                      >
                      <p
                        :class="
                          [
                            $vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'title'
                          ] + ' text-start font-weight-bold mb-0'
                        "
                      >
                        Abschluss des Tarifs „Stationär - Clinic Plus“ nicht
                        möglich
                      </p>
                    </v-container>
                  </div>
                </v-form>
                <v-btn
                  :disabled="showInsureWarningForPrivate"
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
/*eslint-disable*/
import MainPanel from '@/components/MainPanel.vue';
import CalendarIcon from '@/components/Icons/CalendarIcon';
export default {
  name: 'MyPersonalData',
  components: {
    MainPanel,
    CalendarIcon,
  },
  data() {
    return {
      panelTitle: 'Meine persönlichen Daten',
      salutationOptions: ['Frau', 'Herr', 'Divers'],
      salutation: 'Frau',
      titleOptions: ['Kein Titel', 'Dr.', 'Prof.', 'Prof. Dr.'],
      title: 'Kein Titel',
      firstGivenName: '',
      surname: '',
      street: '',
      streetNo: '',
      country: 'Deutschland',
      postCode: '',
      place: '',
      phoneNo: '',
      emailAddress: '',
      professionalActivities: '',
      settingDate: '',
      insuredOption: '0',
      agreeCheckBox: false,
      dentalInsuranceAvailable: '1',
      showReadMore: true,
      showInsureWarningForPrivate: false,
      warningSelectionInDashboard: false,
      // calendar variables
      date: '',
      dateFormatted: '',
      menu: false,
      showWarning: false,
      datePreviousValue: null,
      dateInputRules: [
        value => (value || '').length > 0 || 'Bitte ausfüllen',
        value =>
          (value || '').length <= 10 ||
          'Bitte korrektes Datum eingeben: TT.MM.JJJJ',
        value => {
          const pattern = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
          return (
            pattern.test(value) || 'Bitte korrektes Datum eingeben: TT.MM.JJJJ'
          );
        },
      ],
    };
  },
  watch: {
    insuredOption: function(option) {
      this.showInsureWarningForPrivate =
        option === '1' && this.warningSelectionInDashboard;
    },
    //alendar
    date(newVal) {
      if (newVal) this.dateFormatted = this.formatDate(new Date(newVal));
    },
  },
  methods: {
    onClickNext() {
      if (this.$refs.personalForm.validate()) {
        if (this.showInsureWarningForPrivate && this.insuredOption == '1')
          return;
        else {
          this.$store.dispatch('profile/setPersonalData', {
            salutation: this.salutation,
            title: this.title,
            firstGivenName: this.firstGivenName,
            surname: this.surname,
            street: this.street,
            streetNo: this.streetNo,
            country: this.country,
            postCode: this.postCode,
            place: this.place,
            phoneNo: this.phoneNo,
            emailAddress: this.emailAddress,
            professionalActivities: this.professionalActivities,
            settingDate: this.dateFormatted,
            insuredOption: this.insuredOption,
          });
          this.$router.push({ name: 'MyPaymentMethod' });
        }
      } else {
        console.log('validation failed');
      }
    },
    validatePlz(event, data, length) {
      if (/^\d+$/.test(event.key) && data.toString().length < length)
        return true;
      else event.preventDefault();
    },

    validatePhoneNo(event, data) {
      if (/^\d+$/.test(event.key)) return true;
      else event.preventDefault();
    },

    onClickShowMore() {
      this.showReadMore = false;
    },
    onClickHideMore() {
      this.showReadMore = true;
    },
    // calendar
    formatDate(date) {
      if (!date) return null;
      return this.$helper.commonHelper.getGermanFormatDate(date);
    },
    parseDate(date) {
      if (!date) return null;
      const [day, month, year] = date.split('.');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },

    fillData() {
      let profile = this.$store.state.profile.personalData;
      this.salutation = profile.salutation;
      this.title = profile.title;
      this.firstGivenName = profile.firstGivenName;
      this.surname = profile.surname;
      this.street = profile.street;
      this.streetNo = profile.streetNo;
      this.country = profile.country;
      this.postCode = profile.postCode;
      this.place = profile.place;
      this.phoneNo = profile.phoneNo;
      this.emailAddress = profile.emailAddress;
      this.professionalActivities = profile.professionalActivities;
      this.dateFormatted = profile.settingDate;
      this.insuredOption = profile.insuredOption;
      if (this.$store.state.products.categories) {
        this.warningSelectionInDashboard =
          this.$store.state.products.categories[0].checked &&
          this.$store.state.products.categories[0].selectedId === 2;
      }
    },
    onInputDate($event) {
      console.log($event);
      if (
        this.datePreviousValue !== null &&
        $event.length > this.datePreviousValue &&
        ($event.length === 2 || $event.length === 5)
      ) {
        this.dateFormatted = this.dateFormatted + '.';
      }
      this.datePreviousValue = $event.length;
    },
  },
  mounted() {
    this.$store.dispatch('setPagesProgress', 57);
    this.fillData();
  },
};
</script>

<style lang="scss" scoped>
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
  }
}
</style>
<style lang="scss">
.date-picker .v-input__append-inner {
  position: absolute;
  right: 0;
  bottom: 6px;
  @media only screen and (max-width: 599px) {
    position: unset;
  }
}
</style>
