<template>
  <div id="kontejnerResults">
    <p>❤️ Máš správně {{ correct }} z {{ count }} ❤️️</p>
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
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0 20px 0px;
  max-width: 700px;
  font-size: 20px;
  background-color: white;
}
</style>
