import carto from "@carto/carto-vl";
import ILayerDefinition from "../types/ILayerDefinition";

export async function createCartoLayer(layerDefinition: ILayerDefinition) {
  const source = getSource(layerDefinition);
  const viz = new carto.Viz(layerDefinition.viz);
  const layer = new carto.Layer(layerDefinition.id, source, viz);

  return layer;
}

function getSource(layerDefinition: ILayerDefinition) {
  if (layerDefinition.geojsonSource) {
    const geoJSON = JSON.parse(layerDefinition.geojsonSource);
    return new carto.source.GeoJSON(geoJSON);
  }
  if (layerDefinition.source) {
    return new carto.source.Dataset(layerDefinition.source);
  }
}

export default { createCartoLayer };
