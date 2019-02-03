<template>
  <div class="wrapper">
    <header class="as-p--16">
      <h1 class="as-title as-m--0">Edit Layer</h1>
    </header>
    <section>
      <h4 class="as-subheader">Color</h4>
      <h4 class="as-subheader">Width</h4>
      <h4 class="as-subheader">StrokeColor</h4>
      <h4 class="as-subheader">StrokeWidth</h4>
    </section>
    <section class="actions-section">
      <!-- <button @click="deleteLayer" class="as-btn as-btn--secondary">DELETE LAYER </button> -->
    </section>
    <aside class="footer">
      <textarea @input="oninput" name="viz" id="viz" cols="30" rows="10"></textarea>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class AddLayerPage extends Vue {
  private id!: string;

  public mounted() {
    this.id = this.$route.params.id;
  }

  public oninput({ target }: { target: HTMLTextAreaElement }) {
    this.$store.dispatch("editor/updateViz", {
      id: this.id,
      viz: target.value
    });
  }

  public deleteLayer() {
    this.$store.dispatch("editor/deleteLayer", { id: this.id });
    this.$router.push("/editor");
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

section {
  overflow: scroll;
  max-height: calc(100% - 64px);

  .as-subheader {
    background: var(--as--color--ui-02);
    padding: 8px 16px;
    margin: 0;
  }
}

.actions-section {
  padding: 16px;

  button {
    width: 100%;
    justify-content: center;
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

