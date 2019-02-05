import carto from "@carto/carto-vl";
import mapboxgl, { Map } from "mapbox-gl";
import mapService from "./mapService";

export default class MapClass {
  // MapboxGL map instance
  private map!: Map;
  // IMPORTANT: To prevent vue to observe this initalize in `createMap` method.
  private layers!: any[];

  public setCredentials(username: string, apiKey: string) {
    carto.setDefaultAuth({ username, apiKey });
  }

  public createMap(element: Element) {
    this.layers = [];
    this.map = new mapboxgl.Map({
      container: element,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      dragRotate: false
    });
  }

  public async renderLayers(layerDefinitions: any[]) {
    layerDefinitions.map(this.addLayerFromDefinition.bind(this));
  }

  public setBasemap(name: string) {
    name = name.toLowerCase();
    switch (name) {
      case "voyager":
        this.map.setStyle("https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json");
        return;
      case "positron":
        this.map.setStyle("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");
        return;
      case "darkmatter":
        this.map.setStyle("https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json");
        return;
      default:
        break;
    }
  }
  private hasLayer(layerID: any) {
    return this.layers.some(l => l.id === layerID);
  }

  private async addLayerFromDefinition(layerDefinition: any) {
    if (this.hasLayer(layerDefinition.id)) {
      const layer = this.layers.find(l => l.id === layerDefinition.id);
      let viz;
      try {
        viz = new carto.Viz(layerDefinition.viz);
      } catch (err) {
        return layer;
      }
      layer.blendToViz(viz);
      return layer;
    }
    return this.addLayer(layerDefinition);
  }

  private async addLayer(layerDefinitions: any) {
    const layer = await mapService.createCartoLayer(layerDefinitions);
    this.layers.push(layer);
    await layer.addTo(this.map);
    return layer;
  }
}
