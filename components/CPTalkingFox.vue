<template>
  <div class="box">
    <img id="BublinaSTextem3" :src="BublinaSTextem3" alt="Text Bubble" />
    <img :src="resultsFox" alt="ResultFox" class="resultFox" />
  </div>
</template>

<script>
import resultsFox from "../assets/img/resultsFox.png";
import BublinaSTextem3 from "../assets/img/BublinaSTextem3.png";
export default {
  name: "CPTalkingFox",
  data() {
    return {
      resultsFox,
      BublinaSTextem3
    };
  }
};
</script>

<style>
.box {
  margin-top: 20px;
}
.resultFox {
  width: 18vh;
}

#BublinaSTextem3 {
  width: 33vh;
}
</style>
