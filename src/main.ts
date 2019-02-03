import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@carto/airship-style";
import "./registerServiceWorker";

Vue.config.productionTip = false;

(window as any).__viz = {};


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
