<template>
  <div>
    <img :src="logo" alt="Fox logo" />
  </div>
</template>

<script>
import logo from "../assets/img/Logo.png";
export default {
  name: "App",
  data() {
    return {
      logo // 2. přidání názvu obrázku do dat komponenty
    };
  }
};
</script>

<style>
img {
  width: 10vh;
}
</style>
