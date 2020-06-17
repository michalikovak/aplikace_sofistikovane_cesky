<template>
  <div>
    <logo />
    <lessonCompleted />
    <resultsFox />
    <p>Výborně!�Mám radost z tvé sofistivkované češtiny!</p>
    <textBubble />
    <button>Menu</button>
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
    logo: Logo,
    lessonCompleted: LessonCompleted,
    resultsFox: ResultsFox,
    textBubble: TextBubble,
    button: Button,
  },
};
</script>

<style></style>
