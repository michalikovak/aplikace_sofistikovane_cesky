<template>
  <div class="hlavicka">
    <Logo class="logo" />
    <Menu class="welcomemenu" />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";

export default {
  name: "PGwelcome",
  components: {
    Logo: Logo,
    Menu: Menu,
  },
};
</script>

<style scoped>
.hlavicka {
  display: flex;
  align-items: center;
  padding-top: 20px;
}
</style>
