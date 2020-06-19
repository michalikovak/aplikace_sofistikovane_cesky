<template>
  <div kontejnerResults>
    <Logo class="logo" />
    <lessonCompleted class="lessonCompleted" />
    <resultsFox class="resultsFox" />

    <BublinaSTextem2 class="BublinaSTextem2" />
    <p>Měl jsi dobře 9/10</p>
    <Button class="butonik" name="Menu" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import ResultsFox from "../ResultsFox.vue";
import BublinaSTextem2 from "../BublinaSTextem2.vue";
import Button from "../Button.vue";
export default {
  name: "PGresults",
  components: {
    Logo: Logo,
    lessonCompleted: LessonCompleted,
    resultsFox: ResultsFox,
    BublinaSTextem2: BublinaSTextem2,
    Button: Button
  }
};
</script>

<style scoped>
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

.butonik {
  position: absolute;
  top: 90vh;
  left: 17vh;
}
.resultsFox {
  position: absolute;
  top: 42vh;
  left: 16vh;
}

.BublinaSTextem2 {
  position: absolute;
  top: 15vh;
  left: 3vh;
}

p {
  font-size: 1.2rem;
  position: absolute;
  left: 16vh;
  top: 46ch;
}
@media screen and (min-width: 376px) {
  #kontejnerResults {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 36.5%;
  }
}
</style>
