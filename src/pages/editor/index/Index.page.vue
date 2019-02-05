<template>
  <div>
    <header class="as-p--16">
      <h1 class="as-title as-m--0 logo"> REBUILDER </h1>
    </header>
    <section class="as-p--16">
     <!-- Basemap Selector -->
      <h3 class="as-subheader">Basemap</h3>
      <div class="basemaps-container">
        <BasemapBtn
          @click="setBasemap('voyager')" 
          name="voyager"
          src="https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/6/30/24.png"
        />
        <BasemapBtn
          @click="setBasemap('positron')" 
          name="voyager"
          src="https://a.basemaps.cartocdn.com/rastertiles/light_nolabels/6/30/24.png"
        />
        <BasemapBtn
          @click="setBasemap('darkmatter')" 
          name="voyager"
          src="https://a.basemaps.cartocdn.com/rastertiles/dark_nolabels/6/30/24.png"
        />
      </div>
    </section>
    <!-- Layers -->
    <section class="as-p--16">
      <h3 class="as-subheader">Layers</h3>
      <AddLayerBtn class="btn-add-layer" @click="onAddLayerButttonClick"/>
      <div class="layers-container as-pt--8" v-for="layer in layers" :key="layer.id">
        <LayerCard @click="onLayerClick" :layer="layer"/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddLayerBtn from "../components/AddLayerBtn.vue";
import LayerCard from "../components/layerCard.vue";
import BasemapBtn from "../components/BasemapBtn.vue";


@Component({
  components: { AddLayerBtn, LayerCard, BasemapBtn }
})
export default class Index extends Vue {

  get layers() {
    return this.$store.getters["editor/layers"];
  }

  private onAddLayerButttonClick() {
    this.$router.push("/editor/addLayer");
  }

  private onLayerClick(params: any) {
    this.$router.push(`editor/editLayer/${params.id}`);
  }

  private setBasemap(name: string) {
    this.$store.dispatch("editor/setBasemap", name);
  }
}
</script>

<style scoped lang="scss">

header {
  color: white;
  background-color: var(--as--color--secondary);
}

.logo {
  font-family: Montserrat;
  font-weight: bolder;
  letter-spacing: 8px;
  text-align: center;
}

.btn-add-layer {
  border: 1px dashed var(--as--color--primary);
}

.basemaps-container {
  display: flex;
  justify-content: space-between;
}
</style>

