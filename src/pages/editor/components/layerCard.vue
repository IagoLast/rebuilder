<template>
  <div @click.prevent="onCLick" class="layer-card as-mt--8">
    <span class="layer-card__img as-title as-m--16">{{layer.id[0]}}</span>
    <span class="layer-card__name as-subheader as-m--0" >{{layer.id}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component({})
export default class LayerCard extends Vue {
  @Prop() public layer!: any;

  @Emit("click")
  public onCLick() {
    return this.layer;
  }
}
</script>
<style scoped lang="scss">
.layer-card {
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: none;
  border: 1px solid var(--as--color--ui-04);
  border-radius: 4px;
  cursor: pointer;

  &__img {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: var(--as--color--secondary);
    border-radius: 4px;
    color: var(--as--color--type-04);
  }

  &:hover {
    background: var(--as--color--ui-04);
  }
  

  
}
</style>

