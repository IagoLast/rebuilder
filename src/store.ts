import Vue from "vue";
import Vuex from "vuex";
import login from "@/pages/login/login.store";
import editor from "@/pages/editor/editor.store";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    editor
  }
});
