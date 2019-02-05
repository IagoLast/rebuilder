<template>
  <div @click.prevent="onCLick" class="layer-card as-mt--8">
    <img :src="src" class="layer-card__img as-title as-m--0" :title="name"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component({})
export default class LayerCard extends Vue {
  @Prop() public src!: string;
  @Prop() public name!: string;


  @Emit("click")
  public onCLick() {
    return name;
  }
}
</script>
<style scoped lang="scss">
.layer-card {
  display: inline-flex;
  align-items: center;
  box-shadow: none;
  border: 1px solid var(--as--color--ui-04);
  border-radius: 4px;
  cursor: pointer;

  &__img {
    width: 100px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background: var(--as--color--secondary);
    border-radius: 4px;
    color: var(--as--color--type-04);
  }

  &__name {
    text-transform: capitalize;
  }

  &:hover {
    background: var(--as--color--ui-04);
  }
  

  
}
</style>

