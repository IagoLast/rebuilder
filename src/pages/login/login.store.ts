import carto from "@carto/carto-vl";
import Vue from "vue";
import Vuex, { Module } from "vuex";

Vue.use(Vuex);

const loginStore: Module<any, any> = {
  namespaced: true,
  state: {
    username: "cartovl",
    apiKey: "default-public"
  },
  getters: {
    username: (state: any) => state.username,
    apiKey: (state: any) => state.apiKey
  },
  mutations: {
    setUsername(state: any, username: string) {
      state.username = username;
    },
    setApiKey(state: any, apiKey: string) {
      state.apiKey = apiKey;
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      commit("setUsername", username);
      commit("setApiKey", password);

      carto.setDefaultAuth({
        user: username,
        apiKey: password,
        username,
      });
    }
  }
};

export default loginStore;
