<template>
  <div class="box">
    <img id="BublinaSTextem3" :src="BublinaSTextem3" alt="Text Bubble" />
    <animace />
  </div>
</template>

<script>
import animace from "../components/animace.vue";
import BublinaSTextem3 from "../assets/img/BublinaSTextem3.png";
export default {
  name: "CPTalkingFox",
  data() {
    return {
      BublinaSTextem3,
    };
  },
  components: {
    animace,
  },
};
</script>

<style>
.box {
  display: flex;
  margin-top: 20px;
}

#BublinaSTextem3 {
  width: 33vh;
}
</style>
