<template>
  <div
    :class="{ 'with-title': panelTitle, higher: $vuetify.breakpoint.mdAndUp }"
  >
    <h2 class="mb-2">{{ panelTitle }}</h2>
    <v-card
      :class="{
        'pa-10': $vuetify.breakpoint.mdAndUp,
        'pa-6': $vuetify.breakpoint.smAndDown,
        'mx-auto': true
      }"
      outlined
    >
      <slot>No slot content defined</slot>
    </v-card>
    <v-row
      v-if="showBackButton"
      justify="start"
      :class="{ 'mt-4': $vuetify.breakpoint.smAndDown, 'px-3': true }"
    >
      <v-btn
        text
        class="px-3 primary--text body-1 btn-link"
        large
        :ripple="false"
        @click="onClickGoBack"
      >
        <go-back-icon
          color="primary"
          v-if="$vuetify.breakpoint.mdAndUp"
        ></go-back-icon>
        <go-back-circle-icon
          v-if="$vuetify.breakpoint.smAndDown"
        ></go-back-circle-icon>
        <span v-if="$vuetify.breakpoint.mdAndUp">ZURÜCK</span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import GoBackCircleIcon from "@/components/Icons/GoBackCircleIcon.vue";
import GoBackIcon from "@/components/Icons/GoBackIcon.vue";
export default {
  name: "MainPanel",
  components: {
    GoBackCircleIcon,
    GoBackIcon
  },
  props: {
    panelTitle: String,
    showBackButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClickGoBack() {
      this.$router.go(-1);
    }
  }
};
</script>
