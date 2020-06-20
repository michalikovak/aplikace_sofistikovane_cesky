<template>
  <div id="kontejnerME">
    <Logo class="logo" />
    <Hlavicka2 class="hlavicka2" />
    <div class="divparagraph" v-for="word in lesson1words">
      <p class="words" v-html="word.word"><!--{{ word.word }}--></p>
      <p class="meaning" v-html="word.meaning"><!--{{ word.meaning }}--></p>
      <p class="context" v-html="word.context"><!--{{ word.context }}--></p>
    </div>
    <Button class="test" name="Test" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import Hlavicka2 from "../Hlavicka2.vue";
import data from "../../src/data.js";
import Button from "../Button.vue";

export default {
  name: "PGmoreExamples",
  data() {
    return {
      lesson1words: data[0].words,
    };
  },
  components: {
    Logo: Logo,
    Hlavicka2: Hlavicka2,
    Button: Button,
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnerME {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .divparagraph {
    width: 47vh;
    margin-top: 20px;
  }
  .words {
    text-transform: uppercase;
    font-size: 1.25rem;
    color: #e26d5c;
  }
  .meaning {
    font-weight: 400;
  }
}
</style>
