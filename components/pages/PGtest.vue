<template>
  <div>
    <logo />
    <lessonCompleted />
    <!--<p>{{lesson1.test[0].questionStart[options1].questionEnd}}</p>-->
    <button>Výsledek</button>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
/*import data from "../../src/data.js"*/
import Button from "../Button.vue";
export default {
  name: "PGtest",
  /*data() {
    return {
      lesson1: data[0].contextParagraph
    };
  },*/
  components: {
    logo: Logo,
    lessonCompleted: LessonCompleted,
    button: Button,
  },
};
</script>

<style></style>
