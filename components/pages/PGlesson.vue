<template>
  <div>
    <logo />
    <lessonCompleted />
    <button>Lekce 1</button>
    <button>Lekce 2</button>
    <button>Lekce 3</button>
    <button>Lekce 4</button>
    <button>Lekce 5</button>
    <welcomeFox />
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import Button from "../Button.vue";
import WelcomeFox from "../WelcomeFox.vue";
export default {
  name: "PGlesson",
  components: {
    logo: Logo,
    lessonCompleted: LessonCompleted,
    button: Button,
    welcomeFox: WelcomeFox,
  },
};
</script>

<style></style>
