import axios from "axios";
const envBaseServerApiUrl = process.env.VUE_APP_BASE_SERVER_URL;
export default {
  axios: axios.create({
    baseURL: envBaseServerApiUrl
  }),

  config: {},
  post(endPoint, payload = {}) {
    return this.axios.post(endPoint, payload, this.config).then(res => {
      return res.data;
    });
  },
  put(endPoint, payload = {}) {
    return this.axios.put(endPoint, payload, this.config).then(res => {
      return res.data;
    });
  },
  get(endPoint) {
    return this.axios.get(endPoint, this.config).then(res => {
      return res.data;
    });
  }
};
