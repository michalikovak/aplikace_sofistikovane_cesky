<template>
  <div>
    <Logo />
    <lessonCompleted />
    <div v-for="test in lesson1test">
      <p>{{ test.questionStart }}</p>
      <p>{{ test.options1 }}</p>
      <p>{{ test.questionEnd }}</p>
    </div>
    <Button name="Výsledek" />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import data from "../../src/data.js";
import Button from "../Button.vue";
export default {
  name: "PGtest",
  data() {
    return {
      lesson1test: data[0].test,
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
