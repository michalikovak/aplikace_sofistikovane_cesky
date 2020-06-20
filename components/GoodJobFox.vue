<template>
  <div id="kontejnerResults">
    <BublinaSTextem2 class="BublinaSTextem2" />
    <resultsFox class="resultsFox" />

    <img id="BublinaSTextem2" :src="BublinaSTextem2" alt="Text Bubble" />
    <img :src="resultsFox" alt="ResultFox" class="resultFox" />
    <p>Dobře 9/10</p>
  </div>
</template>

<script>
import BublinaSTextem2 from "../assets/img/BublinaSTextem2.png";
import resultsFox from "../assets/img/resultsFox.png";
export default {
  name: "GoodJobFox",
  data() {
    return {
      BublinaSTextem2,
      resultsFox,
    };
  },
};
</script>

<style>
#kontejnerResults {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 1.2rem;
}
</style>
