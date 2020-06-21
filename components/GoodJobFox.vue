<template>
  <div id="kontejnerResults">
    <div class="liskaMluvi">
      <img :src="resultsFox" alt="ResultFox" class="resultFox" />
      <img id="BublinaSTextem2" :src="BublinaSTextem2" alt="Text Bubble" />
    </div>
    <p>❤️ Máš správně {{ correct }} z {{ count }} ❤️️</p>
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
      resultsFox
    };
  }
};
</script>

<style>
#kontejnerResults {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
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
