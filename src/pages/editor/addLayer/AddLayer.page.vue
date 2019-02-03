<template>
  <div>
    <header class="as-p--16">
      <h1 class="as-title as-m--0">Add layer</h1>
    </header>
    <section class="as-p--16 as-mt--8">
      <form @submit.prevent="addNewLayer" class="add-layer-form" action>
        <label class="as-caption" for="layer-id">ID</label>
        <input v-model="layerID" class="as-input" name="layer-id" type="text">
        <label v-show="!geojsonSource" class="as-caption" for="layer-source">Source</label>
        <input
          v-show="!geojsonSource"
          v-model="layerSource"
          class="as-input"
          name="layer-source"
          type="text"
        >
        <label class="as-caption" for="dropzone">File</label>
        <vue-dropzone
          @vdropzone-file-added="onFileAdded"
          class="dropzone"
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
        ></vue-dropzone>
        <button class="as-btn as-btn--secondary as-mt--8">Add new layer</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

let counter = 0;

@Component({
  components: {
    vueDropzone: vue2Dropzone
  }
})
export default class AddLayerPage extends Vue {
  private geojsonSource: string = "";
  private layerSource: string = "";
  private layerID: string = `layer_${++counter}`;
  private dropzoneOptions = {
    url: "https://httpbin.org/post",
    thumbnailWidth: 200,
    addRemoveLinks: true
  };

  private addNewLayer() {
    this.$store.dispatch("editor/addLayer", {
      geojsonSource: this.geojsonSource,
      source: this.layerSource,
      viz: "",
      id: this.layerID
    });
    this.$router.push("/editor");
  }

  private async onFileAdded(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.onFileRead(reader.result as string);
    };
    reader.readAsText(file);
  }

  private onFileRead(content: string) {
    this.geojsonSource = content;
  }
}
</script>

<style scoped lang="scss">

header {
  color: white;
  background-color: var(--as--color--secondary);
}

.add-layer-form {
  .as-btn {
    width: 100%;
    justify-content: center;
  }

  .dropzone {
    border-radius: 4px;
    cursor: pointer;
    border: none;
    box-shadow: inset 0 0 0 1px var(--as--color--ui-04);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

