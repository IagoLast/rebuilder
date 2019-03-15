<template>
  <div class="wrapper">
    <header class="as-p--16">
      <h1 class="as-title as-m--0">Edit Layer</h1>
    </header>

    <section class="tutorial">
      <h1 class="as-subheader"> DEMO </h1>
      <button class="as-btn as-btn--secondary" @click="prev"> PREV STYLE </button>
      <button class="as-btn as-btn--secondary" @click="next"> NEXT STYLE  </button>
    </section>

    <aside class="footer">
      <textarea v-model="viz" name="viz" id="viz" cols="30" rows="10"></textarea>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AddLayerPage extends Vue {
  private id!: string;
  private index = 0;
  private styles = [
`width: 7
color: red
strokeWidth: 1
strokeColor: white
`,
`width: 7
color: blue
strokeWidth: 1
strokeColor: white
`,
`width: 7
color: rgba(204,0,0,0.2)
strokeColor: opacity(white, 0.2)
`,
`
width: 7
color: opacity(green, 0.3)
strokeColor: opacity(white, 0.2)
`,
`width: $amount / 100
color: red
strokeWidth: 0
`,
`width: $amount / 100
color: red
strokeWidth: 0
filter: $amount > 10000
`,
`width: $amount / 100
color: ramp($amount, PEACH)
strokeWidth: 0
filter: $amount > 1000
`,
`width: $amount / 100
color: ramp($amount, PEACH)
strokeWidth: 0
filter: $amount > 250
`,
`width: $amount / 100
color: ramp($category, PRISM)
strokeWidth: 0
filter: $amount > 250
`,
`width: $amount / 100
color: ramp($category, PRISM)
strokeWidth: 0
filter: animation($date, 20, fade(1, 1))
`
];

  get viz(): string {
    const layer = this.$store.getters["editor/layers"].find((l: any) => l.id === this.id);
    if (!layer) {
      return "";
    }
    return layer.viz;
  }

  set viz(value: string) {
    this.$store.dispatch("editor/updateViz", {
      id: this.id,
      viz: value
    });
  }

  public mounted() {
    this.id = this.$route.params.id;
    this.viz = this.$store.getters["editor/layers"].find((layer: any) => layer.id === this.id).viz;
  }

  public deleteLayer() {
    this.$store.dispatch("editor/deleteLayer", { id: this.id });
    this.$router.push("/editor");
  }

  public next() {
    this.$store.dispatch("editor/updateViz", {
      id: this.id,
      viz: this.styles[this.index++]
    });
  }

  public prev() {
    this.$store.dispatch("editor/updateViz", {
      id: this.id,
      viz: this.styles[this.index--]
    });
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
header {
  color: white;
  background-color: var(--as--color--secondary);
}
.tutorial {

  .as-subheader {
    background: var(--as--color--ui-02);
    padding: 8px 16px;
    margin: 0;
  }

  .as-btn {
    margin: 16px 0 0 16px;
  }
}

.footer {
  position: fixed;
  left: 360px;
  right: 0;
  bottom: 0;
  height: 200px;
  background: var(--as--color--type-01);

  [name="viz"] {
    width: 100%;
    height: 100%;
    padding: 8px;
    font-family: monospace;
    font-size: 16px;
    outline: none;
    border: none;
    box-shadow: rgba(44, 44, 44, 0.16) 1px 0 4px 0;
  }
}
</style>

