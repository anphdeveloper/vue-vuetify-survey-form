import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#00718F",
        secondary: "#035370",
        accent: "#00718F",
        error: "#E1100A",
        danger: "#ED706C",
        content: "#E5F0F3",
        tertiary: "#035370",
        quaternary: "#CAE9F0",
        quinary: "#4C9BB0",
        senary: "#3C8085",
        white: "#fff"
      }
    }
  }
});
