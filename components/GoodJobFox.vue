<template>
  <div id="kontejnerResults">
    <p>Dobře {{ correct }}/{{ count }}</p>
    <img id="BublinaSTextem2" :src="BublinaSTextem2" alt="Text Bubble" />
    <img :src="resultsFox" alt="ResultFox" class="resultFox" />
  </div>
</template>

<script>
import BublinaSTextem2 from "../assets/img/BublinaSTextem2.png";
import resultsFox from "../assets/img/resultsFox.png";
export default {
  name: "GoodJobFox",
  props: ["correct", "count"],
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
  font-size: 1.5rem;
}
</style>
