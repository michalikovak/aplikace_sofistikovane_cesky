<template>
  <div>
    <img id="BublinaSTextem" :src="BublinaSTextem" alt="Text Bubble" />
  </div>
</template>

<script>
import BublinaSTextem from "../assets/img/BublinaSTextem.png";
export default {
  name: "BublinaSTextem",
  data() {
    return {
      BublinaSTextem
    };
  }
};
</script>

<style>
#BublinaSTextem {
  width: 50vh;
}
</style>
