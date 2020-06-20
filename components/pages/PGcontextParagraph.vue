<template>
  <div id="kontejnerCP">
    <Logo class="logo" />
    <Hlavicka2 class="hlavicka2" />
    <resultsFox class="resultsFox" />
    <BublinaSTextem3 class="BublinaSTextem3" />
    <p class="paragraph" v-html="lesson1.contextParagraph">
      <!--{{ lesson1.contextParagraph }}-->
      >
    </p>
    <div class="buttonsCP">
      <Button class="meaning" name="Vysvětlení" />
      <Button class="test" name="Test" />
    </div>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import Hlavicka2 from "../Hlavicka2.vue";
import ResultsFox from "../ResultsFox.vue";
import BublinaSTextem3 from "../BublinaSTextem3.vue";
import data from "../../src/data.js";
import Button from "../Button.vue";

export default {
  name: "PGcontextParagraph",
  /*computed: {
    lesson1: function() {
      console.log(data[0]);
      return data[0];
    },
  },*/
  data() {
    return {
      lesson1: data[0],
    };
  },
  components: {
    Logo: Logo,
    Hlavicka2: Hlavicka2,
    resultsFox: ResultsFox,
    BublinaSTextem3: BublinaSTextem3,
    Button: Button,
  },
};
</script>

<style scoped>
#kontejnerCP {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.paragraph {
  border-radius: 10px;
  padding: 10px;

  max-width: 48vh;
  background-color: white;
}

.CPtext {
  font-size: 1rem;

  z-index: 1;
}

.meaning,
.test {
  padding: 0;
}
</style>
