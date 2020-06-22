<template>
  <div class="liskaMluvi2">
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
.liskaMluvi2 {
  display: flex;
  margin-top: 20px;
}

#BublinaSTextem3 {
  min-width: 300px;
  min-height: 250px;
}

@media screen and (max-width: 600px) {
  .liskaMluvi2 {
    flex-direction: column;
  }
  #BublinaSTextem3 {
    margin-bottom: 20px;
  }
}
</style>
