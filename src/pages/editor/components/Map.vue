<template>
  <div class="map-wrapper"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Map from "./MapClass";

@Component
export default class MapComponent extends Vue {
  @Prop() public layerDefinitions!: any[];
  @Prop() public basemap!: string;

  private map: Map = new Map();

  public mounted() {
    // TODO: Use real credentials here, why cartovl works? :S
    this.map.setCredentials("cartovl", "default_public");
    this.map.createMap(this.$el);
    this.renderLayers();
  }

  // TODO: Do we need any kind of clean?
  // tslint:disable-next-line
  public beforeDestroy() {}

  @Watch("layerDefinitions")
  private async renderLayers() {
    await this.map.renderLayers(this.layerDefinitions);
  }

  @Watch("basemap")
  private async setBasemap() {
    await this.map.setBasemap(this.basemap);
  }
}
</script>

<style lang="scss" scoped>
.map-wrapper {
  height: 100%;
  flex: 1;
  background-color: white;
  overflow: hidden;
  max-width: 100%;
}
</style>