<template>
  <div id="kontejnerCP">
    <Logo class="logo" />
    <lessonCompleted class="lessoncompleted" />
    <resultsFox class="resultsFox" />
    <textBubble2 class="textBubble2" />
    <p class="paragraph">{{ lesson1.contextParagraph }}</p>
    <div class="buttonsCP">
      <Button class="meaning" name="Vysvětlení" />
      <Button class="test" name="Test" />
    </div>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import ResultsFox from "../ResultsFox.vue";
import TextBubble2 from "../TextBubble2.vue";
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
    lessonCompleted: LessonCompleted,
    resultsFox: ResultsFox,
    textBubble2: TextBubble2,
    Button: Button,
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnerCP {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    position: absolute;
    top: 4vh;
    left: 4vh;
  }
  .lessoncompleted {
    position: absolute;
    left: 15vh;
    top: 3.5vh;
  }
  .resultsFox {
    position: absolute;
    left: 0.75vh;
    top: 9vh;
  }
  .textBubble2 {
    position: absolute;
    left: 17vh;
    top: 6vh;
  }
  .paragraph {
  }
  .buttonsCP {
  }
  .meaning {
  }

  .test {
  }
}
</style>
