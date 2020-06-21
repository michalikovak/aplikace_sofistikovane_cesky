<template>
  <div id="kontejnerResults">
    <div class="liskaMluvi">
      <animace />
      <img id="BublinaSTextem2" :src="BublinaSTextem2" alt="Text Bubble" />
    </div>
    <p>❤️ Máš správně {{ correct }} z {{ count }} ❤️️</p>
  </div>
</template>

<script>
import BublinaSTextem2 from "../assets/img/BublinaSTextem2.png";
import animace from "../components/animace.vue";

export default {
  name: "GoodJobFox",
  props: ["correct", "count"],
  data() {
    return {
      BublinaSTextem2,
    };
  },
  components: {
    animace,
  },
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
  margin: 30px 0 20px 0px;
  max-width: 700px;
  font-size: 20px;
}

.liskaMluvi {
  display: flex;
}

#BublinaSTextem2 {
  width: 10px;
}
</style>
