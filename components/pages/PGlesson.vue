<template>
  <div>
    <Logo />
    <lessonCompleted />
    <Button name="Lekce 1" />
    <Button name="Lekce 2" />
    <Button name="Lekce 3" />
    <Button name="Lekce 4" />
    <Button name="Lekce 5" />
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
    Logo: Logo,
    lessonCompleted: LessonCompleted,
    Button: Button,
    welcomeFox: WelcomeFox,
  },
};
</script>

<style></style>
