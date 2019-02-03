<template>
  <main class="login-page">
    <form @submit.prevent="onLogin" class="login-form" action>
      <h1 class="as-display">REBUILDER</h1>
      <label class="as-caption as-mt--16 as-mb--4" for="username">Username</label>
      <input v-model="username" class="as-input" name="username" type="text">
      <label class="as-caption as-mt--16 as-mb--4" for="password">Password</label>
      <input v-model="password" class="as-input" name="password" type="password">
      <button class="as-btn as-btn--primary as-btn--l as-mt--24">LOGIN</button>
    </form>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  public username: string = "";
  public password: string = "";

  public onLogin() {
    if (this.username && this.password) {
      this.$store.dispatch("login/login", {
        username: this.username,
        password: this.password
      });
      this.$router.push("/editor");
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  background: var(--as--color--secondary);
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .as-display {
    font-family: Montserrat;
    font-weight: bolder;
    letter-spacing: 18px;
    text-align: center;
  }

  .as-caption {
    text-transform: uppercase;
    display: block;
    letter-spacing: 1px;
  }
}

button {
  width: 100%;
  justify-content: center;
}
</style>

