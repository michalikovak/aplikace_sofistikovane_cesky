<template>
  <div id="kontejnerlesson">
    <Hlavicka2 class="hlavicka2" />
    <div id="buttonslesson">
      <Button class="lesson" name="Lekce 1" />
      <Button class="lesson" name="Lekce 2" />
      <Button class="lesson" name="Lekce 3" />
      <Button class="lesson" name="Lekce 4" />
      <Button class="lesson" name="Lekce 5" />
    </div>
    <welcomeFox class="welcomeFox" />
  </div>
</template>

<script>
import Hlavicka2 from "../Hlavicka2.vue";
import Logo from "../Logo.vue";
import LessonCompleted from "../LessonCompleted.vue";
import Button from "../Button.vue";
import WelcomeFox from "../WelcomeFox.vue";
export default {
  name: "PGlesson",
  components: {
    Hlavicka2: Hlavicka2,
    Button: Button,
    welcomeFox: WelcomeFox,
  },
};
</script>

<style scoped>
#kontejnerlesson {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#buttonslesson {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lesson {
  width: 17vw;
}
</style>
