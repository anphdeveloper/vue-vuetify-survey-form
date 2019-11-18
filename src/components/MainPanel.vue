<template>
  <div :class="{'with-title' : panelTitle, 'higher': $vuetify.breakpoint.mdAndUp}">
    <h2 class="mb-2">{{ panelTitle }}</h2>
    <v-card class="mx-auto pa-10" outlined>
      <slot>No slot content defined</slot>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MainPanel",
  props: {
    panelTitle: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.higher{
  margin-top: -10px;
}
.higher.with-title{
  margin-top: -20px;
}
</style>