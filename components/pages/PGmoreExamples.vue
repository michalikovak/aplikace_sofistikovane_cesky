<template>
  <div>
    <Logo />
    <lessonCompleted />
    <div v-for="word in lesson1words">
      <p>{{ word.word }}</p>
      <p>{{ word.meaning }}</p>
      <p>{{ word.context }}</p>
    </div>
    <Button name="Test" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
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
    lessonCompleted: LessonCompleted,
    Button: Button,
  },
};
</script>

<style></style>
