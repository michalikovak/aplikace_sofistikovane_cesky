<template>
  <div>
    <img id="textBubble" :src="welcomefox" alt="Text Bubble" />
  </div>
</template>

<script>
import bubble from "../assets/img/bubble.png";
export default {
  name: "TextBubble",
  data() {
    return {
      textBubble,
    };
  },
};
</script>

<style></style>
