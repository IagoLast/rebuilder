<template>
  <button @click.prevent="onClick" class="as-btn btn-add-layer as-p--16">ADD NEW LAYER</button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AddLayerBtn extends Vue {
  public onClick() {
    this.$emit("click");
  }
}
</script>
<style scoped lang="scss">
.btn-add-layer {
  width: 100%;
  justify-content: center;
  border: 1px dashed var(--as--color--primary);
}
</style>

