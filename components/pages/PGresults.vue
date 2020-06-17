<template>
  <div>
    <Logo />
    <lessonCompleted />
    <resultsFox />
    <p>Výborně! Mám radost z tvé sofistivkované češtiny!</p>
    <textBubble />
    <Button name="Menu" />
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

<style></style>
