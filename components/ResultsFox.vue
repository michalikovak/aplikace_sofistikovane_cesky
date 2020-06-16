<template>
  <div>
    <img :src="resultsFox" alt="ResultFox" />
  </div>
</template>

<script>
import welcomefox from "../assets/img/resultsFox.png";
export default {
  name: "App",
  data() {
    return {
      resultsFox // 2. přidání názvu obrázku do dat komponenty
    };
  }
};
</script>

<style></style>
