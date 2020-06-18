<template>
  <div>
    <img id="textBubble3" :src="bubble3" alt="Text Bubble" />
  </div>
</template>

<script>
import bubble3 from "../assets/img/bubble3.png";
export default {
  name: "textBubble3",
  data() {
    return {
      bubble3,
    };
  },
};
</script>

<style>
#textBubble3 {
  position: absolute;
  left: 0.2vh;
  top: 15vh;
  width: 40vh;
}
</style>
