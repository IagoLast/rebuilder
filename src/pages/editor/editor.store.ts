import Vue from "vue";
import Vuex, { Module } from "vuex";

Vue.use(Vuex);

const loginStore: Module<any, any> = {
  namespaced: true,
  state: {
    layers: []
  },
  getters: {
    layers: state => state.layers
  },
  mutations: {
    addLayer(state, layerDefinition) {
      if (layerDefinition) {
        Object.freeze(layerDefinition.viz);
        Object.freeze(layerDefinition.source);
        state.layers.push(layerDefinition);
      }
    },
    deleteLayer(state, layerID) {
      state.layers = state.layers.filter((layer: any) => layer.id !== layerID);
    },
    updateLayerViz(state, { id, viz }) {
      state.layers = state.layers.map((layer: any) => {
        if (layer.id === id) {
          layer.viz = viz;
        }
        return layer;
      });
    }
  },
  actions: {
    addLayer({ commit }, { id, source, viz, geojsonSource }) {
      commit("addLayer", { id, geojsonSource, source, viz });
    },
    updateViz({ commit }, { id, viz }) {
      commit("updateLayerViz", { id, viz });
    },
    deleteLayer({ commit }, { id }) {
      commit("deleteLayer", id);
    }
  }
};

export default loginStore;
