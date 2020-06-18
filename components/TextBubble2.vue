<template>
  <div>
    <img id="textBubble2" :src="bubble2" alt="Text Bubble" />
  </div>
</template>

<script>
import bubble2 from "../assets/img/bubble2.png";
export default {
  name: "textBubble2",
  data() {
    return {
      bubble2,
    };
  },
};
</script>

<style>
#textBubble2 {
  width: 35vh;
  height: 50vh;
}
</style>
