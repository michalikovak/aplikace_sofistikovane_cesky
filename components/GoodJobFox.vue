<template>
  <div>
    <img :src="resultsFox" alt="ResultFox" class="resultFox" />
    <img id="BublinaSTextem2" :src="BublinaSTextem2" alt="Text Bubble" />
  </div>
</template>

<script>
import resultsFox from "../assets/img/resultsFox.png";
import BublinaSTextem2 from "../assets/img/BublinaSTextem2.png";
export default {
  name: "GoodJobFox",
  data() {
    return {
      resultsFox,
      BublinaSTextem2,
    };
  },
};
</script>

<style></style>
