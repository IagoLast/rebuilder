<template>
  <div>
    <header class="as-p--16">
      <h1 class="as-title as-m--0"> Rebuilder </h1>
    </header>
    <section class="as-p--16 as-mt--8">
      <AddLayerBtn class="btn-add-layer" @click="onAddLayerButttonClick"/>
      <h3 class="as-subheader as-mt--16">Layers</h3>
      <div class="layers-container" v-for="layer in layers" :key="layer.id">
        <LayerCard @click="onLayerClick" :layer="layer"/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddLayerBtn from "../components/AddLayerBtn.vue";
import LayerCard from "../components/layerCard.vue";


@Component({
  components: { AddLayerBtn, LayerCard }
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
}
</script>

<style scoped lang="scss">

header {
  color: white;
  background-color: var(--as--color--secondary);
}

.btn-add-layer {
  border: 1px dashed var(--as--color--primary);
}
</style>

