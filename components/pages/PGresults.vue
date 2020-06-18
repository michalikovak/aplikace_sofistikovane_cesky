<template>
  <div kontejnerResults>
    <Logo class="logo" />
    <lessonCompleted class="lessonCompleted" />
    <resultsFox class="resultsFox" />
    <p class="pecko">
      Výborně!<br />
      Mám radost z tvé<br />
      sofistikované češtiny!
    </p>
    <p class="pecko2">
      Z testu máš dobře<br />
      6 z 10!!
    </p>
    <textBubble class="textBubble" />
    <Button class="butonik" name="Menu" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import ResultsFox from "../ResultsFox.vue";
import TextBubble from "../TextBubble.vue";
import Button from "../Button.vue";
export default {
  name: "PGresults",
  components: {
    Logo: Logo,
    lessonCompleted: LessonCompleted,
    resultsFox: ResultsFox,
    textBubble: TextBubble,
    Button: Button,
  },
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnerResults {
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
  .lessonCompleted {
    position: absolute;
    left: 16vh;
    top: 3.5vh;
  }
  .pecko {
    position: absolute;
    top: 18vh;
    left: 10vh;
    max-width: 49vh;
    font-size: 1.3rem;
    text-align: center;
    z-index: 1;
  }
  .pecko2 {
    position: absolute;
    top: 35vh;
    left: 12vh;
    max-width: 49vh;
    font-size: 1.3rem;
    text-align: center;
    z-index: 1;
  }
  .butonik {
    position: absolute;
    top: 90vh;
    left: 15vh;
  }
  .resultsFox {
    position: absolute;
    top: 42vh;
    left: 16vh;
  }

  .textBubble {
    position: absolute;
    top: 10vh;
    left: 3vh;
  }
}
</style>
