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
      resultsFox,
    };
  },
};
</script>

<style></style>
