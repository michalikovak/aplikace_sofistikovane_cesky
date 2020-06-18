<template>
  <div id="kontejnerlesson">
    <Logo class="logo" />
    <lessonCompleted class="lessoncompleted" />
    <div id="buttonslesson">
      <Button class="lesson1" name="Lekce 1" />
      <Button class="lesson2" name="Lekce 2" />
      <Button class="lesson3" name="Lekce 3" />
      <Button class="lesson4" name="Lekce 4" />
      <Button class="lesson5" name="Lekce 5" />
    </div>
    <welcomeFox class="welcomeFox" />
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

<style scoped>
@media screen and (max-width: 400px) {
  #kontejnerlesson {
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
  .lessoncompleted {
    position: absolute;
    left: 15vh;
    top: 3.5vh;
  }
  #buttonslesson {
    position: absolute;
    top: 15vh;
  }

  .lesson1,
  .lesson2,
  .lesson3,
  .lesson4,
  .lesson5 {
    padding: 1.5vh;
  }
  .welcomeFox {
    position: absolute;
    top: 55vh;
  }
}
</style>
