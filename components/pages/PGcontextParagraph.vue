<template>
  <div>
    <Logo />
    <lessonCompleted />
    <resultsFox />
    <textBubble2 />
    <p>{{ lesson1.contextParagraph }}</p>
    <Button name="Vysvětlení" />
    <Button name="Test" />
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

<style></style>
