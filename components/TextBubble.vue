<template>
  <div>
    <img id="textBubble" :src="bubble" alt="Text Bubble" />
  </div>
</template>

<script>
import bubble from "../assets/img/bubble.png";
export default {
  name: "TextBubble",
  data() {
    return {
      bubble,
    };
  },
};
</script>

<style></style>
