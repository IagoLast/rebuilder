<template>
  <div class="as-app editor-page">
    <div class="as-content">
      <aside class="as-sidebar as-sidebar--l as-sidebar--left">
        <router-view></router-view>
      </aside>
      <main class="as-main">
        <div class="as-map-area">
          <Map v-if="layerDefinitions" id="map" :layerDefinitions="layerDefinitions"></Map>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "./components/Map.vue";
import ILayerDefinition from "@/pages/editor/types/ILayerDefinition";

@Component({
  components: {
    Map
  }
})
export default class Home extends Vue {
  public username: string = "";
  public password: string = "";

  get layerDefinitions(): ILayerDefinition[] {
    return this.$store.getters["editor/layers"] as ILayerDefinition[];
  }

  public onLogin() {
    if (this.username && this.password) {
      this.$store.dispatch("login/login", {
        username: this.username,
        password: this.password
      });
    }
  }
}
</script>

<style scoped lang="scss">
.editor-page {
  background: #324242;

  .as-sidebar {
    position: relative;
  }
}
</style>

