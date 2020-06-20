<template>
  <div>
    <img id="BublinaSTextem3" :src="BublinaSTextem3" alt="Text Bubble" />
  </div>
</template>

<script>
import BublinaSTextem3 from "../assets/img/BublinaSTextem3.png";
export default {
  name: "BublinaSTextem3",
  data() {
    return {
      BublinaSTextem3
    };
  }
};
</script>

<style>
#BublinaSTextem3 {
  position: absolute;
  left: 0.2vh;
  top: 15vh;
  width: 33vh;
}
</style>
