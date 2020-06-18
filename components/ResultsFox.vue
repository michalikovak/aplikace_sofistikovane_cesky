<template>
  <div>
    <img :src="resultsFox" alt="ResultFox" class="resultFox" />
  </div>
</template>

<script>
import resultsFox from "../assets/img/resultsFox.png";
export default {
  name: "App",
  data() {
    return {
      resultsFox,
    };
  },
};
</script>

<style>
.resultFox {
  width: 18vh;
  position: absolute;
  top: 17vh;
  left: 3.5vh;
}
</style>
